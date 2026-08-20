"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { business } from "@/lib/business";

export default function ContactsClient() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";

  return (
    <div className={`py-10 md:py-20 ${isBg ? "bg-[#13182c]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-noah-bold ${isBg ? "text-white" : "text-gray-900"}`}>
            {isBg ? "Свържете се със Sensor Build" : "Contact Sensor Build"}
          </h1>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "За оглед или оферта за ремонт в София – обадете се или ни пишете."
              : "For a site visit or renovation quotation in Sofia, call or message us."}
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          <a
            href={`tel:${business.phoneE164}`}
            className="flex min-h-20 items-center justify-center rounded-2xl bg-[#388644] px-6 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-[#2d6b35]"
          >
            <span className="mr-3 text-2xl" aria-hidden="true">☎</span>
            <span>{isBg ? "Обади се" : "Call"}<span className="block text-sm font-normal text-white/80">{business.phoneDisplay}</span></span>
          </a>

          <a
            href={`viber://chat?number=${business.phoneE164}`}
            className={`flex min-h-20 items-center justify-center rounded-2xl border px-6 text-center text-lg font-semibold shadow-sm transition ${
              isBg
                ? "border-white/10 bg-[#1a2342] text-white hover:border-[#62b946]"
                : "border-gray-200 bg-gray-50 text-gray-900 hover:border-[#62b946]"
            }`}
          >
            <span className="mr-3 text-2xl" aria-hidden="true">✉</span>
            {isBg ? "Пиши във Viber" : "Message on Viber"}
          </a>
        </div>

        <div className="mx-auto mt-5 grid max-w-4xl gap-3 md:grid-cols-2">
          <a
            href={business.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl border p-5 transition hover:border-[#62b946] ${
              isBg ? "border-white/10 bg-[#1a2342] text-white" : "border-gray-200 bg-gray-50 text-gray-900"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[#62b946]">{isBg ? "Адрес" : "Address"}</p>
            <p className="mt-2 text-base leading-relaxed">{isBg ? business.address.bg : business.address.en}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-[#62b946]">{isBg ? "Отвори в Google Maps →" : "Open in Google Maps →"}</span>
          </a>

          <div className={`rounded-2xl border p-5 ${isBg ? "border-white/10 bg-[#1a2342] text-white" : "border-gray-200 bg-gray-50 text-gray-900"}`}>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#62b946]">{isBg ? "Работно време" : "Working hours"}</p>
            <p className="mt-2 text-base">{isBg ? "Понеделник – Петък" : "Monday – Friday"}: {business.workingHours.weekdays}</p>
            <p className={`mt-1 text-sm ${isBg ? "text-white/65" : "text-gray-600"}`}>{isBg ? "Събота и неделя: почивни дни" : "Saturday and Sunday: closed"}</p>
          </div>
        </div>

        <div className={`mx-auto mt-5 max-w-4xl rounded-2xl border p-5 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-white"}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`font-semibold ${isBg ? "text-white" : "text-gray-900"}`}>{isBg ? "Други начини за връзка" : "Other ways to contact us"}</p>
              <a href={`mailto:${business.email}`} className="mt-1 block text-sm text-[#62b946] hover:underline">{business.email}</a>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#62b946] px-4 py-2 text-sm font-semibold text-[#62b946] transition hover:bg-[#62b946] hover:text-white">Facebook</a>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#62b946] px-4 py-2 text-sm font-semibold text-[#62b946] transition hover:bg-[#62b946] hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className={`text-sm ${isBg ? "text-white/60" : "text-gray-500"}`}>{isBg ? "Партньор" : "Partner"}</p>
          <a href="https://park-decor.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block transition hover:scale-[1.02]">
            <Image
              src={lang === "en" ? "/partner1_en.png" : "/partner1_bg.png"}
              alt={isBg ? "Park Decor – партньор на Sensor Build" : "Park Decor – Sensor Build partner"}
              width={180}
              height={180}
              className="rounded-xl shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
