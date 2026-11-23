export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", name, {
    ...params,
    page_path: window.location.pathname,
  });
}
