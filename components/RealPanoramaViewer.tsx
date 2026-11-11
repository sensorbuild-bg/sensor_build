"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  label?: string;
  initialYaw?: number;
};

const VERTEX_SHADER = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPanorama;
uniform vec2 uViewport;
uniform float uYaw;
uniform float uPitch;
uniform float uVerticalFov;
void main() {
  vec2 normalized = vUv * 2.0 - 1.0;
  float aspect = uViewport.x / max(uViewport.y, 1.0);
  float focal = tan(uVerticalFov * 0.5);
  vec3 dir = normalize(vec3(normalized.x * aspect * focal, normalized.y * focal, -1.0));

  float cp = cos(uPitch);
  float sp = sin(uPitch);
  dir = vec3(dir.x, dir.y * cp - dir.z * sp, dir.y * sp + dir.z * cp);

  float cy = cos(uYaw);
  float sy = sin(uYaw);
  dir = vec3(dir.x * cy + dir.z * sy, dir.y, -dir.x * sy + dir.z * cy);

  float longitude = atan(dir.x, -dir.z);
  float latitude = asin(clamp(dir.y, -1.0, 1.0));
  vec2 uv = vec2(fract(0.5 + longitude / 6.28318530718), clamp(0.5 + latitude / 3.14159265359, 0.001, 0.999));
  gl_FragColor = texture2D(uPanorama, uv);
}`;

function buildShader(
  gl: WebGLRenderingContext,
  source: string,
  type: number
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/** Genuine equirectangular (2:1) panoramas only — no AI-generated geometry. */
export default function RealPanoramaViewer({
  src,
  label = "360° панорама",
  initialYaw = -1.35,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !src) return;

    let disposed = false;
    setError(null);
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: true,
      preserveDrawingBuffer: false,
    });

    if (!gl) {
      setError("Този браузър не поддържа WebGL визуализация.");
      return;
    }

    const vertex = buildShader(gl, VERTEX_SHADER, gl.VERTEX_SHADER);
    const fragment = buildShader(gl, FRAGMENT_SHADER, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();

    if (!vertex || !fragment || !program) {
      setError("Проблем при зареждане на 360° изгледа.");
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      if (program) gl.deleteProgram(program);
      return;
    }

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setError("360° изгледът не може да се стартира.");
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteProgram(program);
      return;
    }

    const buffer = gl.createBuffer();
    const texture = gl.createTexture();
    if (!buffer || !texture) {
      setError("360° изгледът не може да зареди изображението.");
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteProgram(program);
      if (buffer) gl.deleteBuffer(buffer);
      if (texture) gl.deleteTexture(texture);
      return;
    }

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const position = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const viewportLocation = gl.getUniformLocation(program, "uViewport");
    const yawLocation = gl.getUniformLocation(program, "uYaw");
    const pitchLocation = gl.getUniformLocation(program, "uPitch");
    const fovLocation = gl.getUniformLocation(program, "uVerticalFov");
    const panoramaLocation = gl.getUniformLocation(program, "uPanorama");

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.uniform1i(panoramaLocation, 0);

    const view = { yaw: initialYaw, pitch: 0, horizontalFov: 88 };
    const pointers = new Map<number, { x: number; y: number }>();
    let pinchDistance = 0;
    let ready = false;
    let frame = 0;

    const draw = () => {
      frame = 0;
      if (!ready || disposed) return;
      const width = Math.max(1, canvas.clientWidth);
      const height = Math.max(1, canvas.clientHeight);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = Math.round(width * pixelRatio);
      const displayHeight = Math.round(height * pixelRatio);
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      const horizontal = (view.horizontalFov * Math.PI) / 180;
      const vertical = 2 * Math.atan(Math.tan(horizontal / 2) / (width / height));
      gl.uniform2f(viewportLocation, canvas.width, canvas.height);
      gl.uniform1f(yawLocation, view.yaw);
      gl.uniform1f(pitchLocation, view.pitch);
      gl.uniform1f(fovLocation, vertical);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const requestDraw = () => {
      if (!frame) frame = window.requestAnimationFrame(draw);
    };
    const onPointerDown = (event: PointerEvent) => {
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      canvas.setPointerCapture(event.pointerId);
      pinchDistance = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      const previous = pointers.get(event.pointerId);
      if (!previous) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (pointers.size === 1) {
        view.yaw -= (event.clientX - previous.x) * 0.004;
        view.pitch = Math.max(
          -1.4,
          Math.min(1.4, view.pitch + (event.clientY - previous.y) * 0.004)
        );
      } else if (pointers.size === 2) {
        const points = Array.from(pointers.values());
        const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        if (pinchDistance > 0) {
          view.horizontalFov = Math.max(40, Math.min(112, view.horizontalFov * pinchDistance / distance));
        }
        pinchDistance = distance;
      }
      requestDraw();
    };
    const onPointerUp = (event: PointerEvent) => {
      pointers.delete(event.pointerId);
      pinchDistance = 0;
    };
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      view.horizontalFov = Math.max(40, Math.min(112, view.horizontalFov + event.deltaY * 0.04));
      requestDraw();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "+", "-", "="].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "ArrowLeft") view.yaw -= 0.12;
      if (event.key === "ArrowRight") view.yaw += 0.12;
      if (event.key === "ArrowUp") view.pitch = Math.min(1.4, view.pitch + 0.12);
      if (event.key === "ArrowDown") view.pitch = Math.max(-1.4, view.pitch - 0.12);
      if (event.key === "+" || event.key === "=") view.horizontalFov = Math.max(40, view.horizontalFov - 5);
      if (event.key === "-") view.horizontalFov = Math.min(112, view.horizontalFov + 5);
      requestDraw();
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("keydown", onKeyDown);
    const resizeObserver = new ResizeObserver(requestDraw);
    resizeObserver.observe(canvas);
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (disposed) return;
      if (Math.abs(img.naturalWidth / img.naturalHeight - 2) > 0.02) {
        setError("Изберете истинска 360° панорама с пропорция 2:1.");
        return;
      }
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      ready = true;
      requestDraw();
    };
    img.onerror = () => {
      if (!disposed) setError("Изображението не можа да се зареди.");
    };
    img.src = src;

    return () => {
      disposed = true;
      img.onload = null;
      img.onerror = null;
      img.src = "";
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("keydown", onKeyDown);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, [src, initialYaw]);

  const toggleFullscreen = () => {
    const element = wrapperRef.current;
    if (!element) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void element.requestFullscreen();
    }
  };

  return (
    <div ref={wrapperRef} className="relative overflow-hidden rounded-2xl bg-[#0f1424] fullscreen:rounded-none">
      <canvas
        ref={canvasRef}
        tabIndex={0}
        role="img"
        aria-label={label}
        className="block aspect-video w-full cursor-grab touch-none outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[#62b946] fullscreen:h-screen fullscreen:aspect-auto"
      />
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#13182c] p-5 text-center text-sm text-white">
          {error}
        </div>
      ) : null}
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-black/55 px-3 py-2 text-xs text-white/95 backdrop-blur-sm">
        Завърти с мишка или пръст · Приближи с колелцето
      </div>
      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute bottom-3 right-3 rounded-lg border border-white/25 bg-black/65 px-3 py-2 text-sm text-white transition hover:bg-black/80"
        aria-label="360° на цял екран"
      >
        ⛶ Цял екран
      </button>
    </div>
  );
}
