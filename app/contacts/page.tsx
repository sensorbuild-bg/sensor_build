import type { Metadata } from "next";
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

export default function ContactsPage() {
  return <ContactsClient />;
}
