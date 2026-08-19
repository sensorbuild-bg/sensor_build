import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Ремонти и строителство в София",

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
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
