import type { Metadata } from "next";
import BathroomMediaClient from "./BathroomMediaClient";

export const metadata: Metadata = {
  title: "Завършена баня – видео и 360° оглед | Sensor Build",
  description:
    "Разгледайте реално изпълнение на баня от Sensor Build – видео с плавен монтаж и интерактивна 360° панорама.",
  robots: { index: false, follow: false }, // Enable indexing after the media is uploaded and reviewed.
};

export default function FinishedBathroomPage() {
  return <BathroomMediaClient />;
}
