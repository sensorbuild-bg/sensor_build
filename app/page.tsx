import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ремонти и строителство в София | Sensor Build",
  },

  description:
    "Цялостни и частични ремонти в София – гипсокартон, шпакловки, боядисване, ВиК, електроинсталации, бани, настилки и подово отопление.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ремонти и строителство в София | Sensor Build",
    description:
      "Цялостни и частични ремонти в София с ясен план, техническо изпълнение и внимание към детайла.",
    url: "/",
    siteName: "Sensor Build",
    type: "website",
    images: [
      {
        url: "/main.webp",
        alt: "Sensor Build - ремонти и строителство в София",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
