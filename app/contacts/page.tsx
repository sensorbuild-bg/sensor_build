import type { Metadata } from "next";
import { business } from "@/lib/business";
import ContactsClient from "./ContactsClient";

export const metadata: Metadata = {
  title: "Контакти за ремонт в София",
  description:
    "Свържете се със Sensor Build за цялостни и частични ремонти в София. Телефон, Viber, Messenger, имейл, местоположение и работно време.",

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
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
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
