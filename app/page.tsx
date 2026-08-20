import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { business } from "@/lib/business";

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
      "@id": `${business.url}/#website`,
      url: `${business.url}/`,
      name: business.name,
      alternateName: "Сензор Билд",
      inLanguage: "bg-BG",
    },
    {
      "@type": "GeneralContractor",
      "@id": `${business.url}/#business`,
      name: business.name,
      legalName: business.legalName,
      url: `${business.url}/`,
      image: `${business.url}/main.webp`,
      logo: `${business.url}/logo.webp`,
      telephone: business.phoneE164,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        postalCode: business.address.postalCode,
        addressCountry: business.address.countryCode,
      },
      areaServed: {
        "@type": "City",
        name: business.address.city,
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
          opens: business.workingHours.opens,
          closes: business.workingHours.closes,
        },
      ],
      sameAs: [
        business.social.facebook,
        business.social.instagram,
        business.social.linkedin,
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
