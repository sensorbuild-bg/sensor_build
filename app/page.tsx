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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sensorbuild.bg/#website",
      url: "https://www.sensorbuild.bg/",
      name: "Sensor Build",
      alternateName: "Сензор Билд",
      inLanguage: "bg-BG",
    },
    {
      "@type": "GeneralContractor",
      "@id": "https://www.sensorbuild.bg/#business",
      name: "Sensor Build",
      legalName: "Сензор Билд ЕООД",
      url: "https://www.sensorbuild.bg/",
      image: "https://www.sensorbuild.bg/main.webp",
      logo: "https://www.sensorbuild.bg/logo.webp",
      telephone: "+359878344006",
      email: "sensorbuild@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ж.к. Сухата река 219А",
        addressLocality: "София",
        postalCode: "1505",
        addressCountry: "BG",
      },
      areaServed: {
        "@type": "City",
        name: "София",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "00:00",
          closes: "00:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61582272743716",
        "https://www.instagram.com/sensorbuild/",
        "https://www.linkedin.com/company/sensor-build/",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomeClient />
    </>
  );
}
