import type { Metadata } from "next";
import { business } from "@/lib/business";
import ContactsClient from "./ContactsClient";

export const metadata: Metadata = {
  title: "Контакти за ремонт в София",
  description:
    "Контакти на Sensor Build за ремонти в София – телефон, Viber, имейл, работно време и адрес с директен линк към снимките и отзивите в Google Maps.",

  alternates: {
    canonical: "/contacts",
  },

  openGraph: {
    title: "Контакти за ремонт в София | Sensor Build",
    description:
      "Свържете се със Sensor Build за ремонт, оглед или оферта в София.",
    url: "/contacts",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${business.url}/contacts#contact-page`,
  url: `${business.url}/contacts`,
  name: "Контакти | Sensor Build",
  mainEntity: {
    "@type": "GeneralContractor",
    "@id": `${business.url}/#business`,
    name: business.name,
    url: `${business.url}/`,
    telephone: business.phoneE164,
    email: business.email,
    hasMap: business.googleBusinessProfileUrl,
    sameAs: [
      business.googleBusinessProfileUrl,
      business.social.facebook,
      business.social.instagram,
      business.social.linkedin,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressCountry: business.address.countryCode,
    },
  },
};

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ContactsClient />
    </>
  );
}
