"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { business } from "@/lib/business";

function PhoneIcon() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#388644]">
      <svg
        className="h-5 w-5 text-[#0f1426]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
      </svg>
    </span>
  );
}

function EmailIcon() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#388644]">
      <svg
        className="h-5 w-5 text-[#0f1426]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    </span>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.967v5.696h-3v-11h2.879v1.507h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.596 1.996 3.596 4.59v6.466z" />
    </svg>
  );
}

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const isBg = lang === "bg";

  const serviceLinks = [
    {
      href: "/services/remont-na-apartament",
      label: isBg ? "Ремонт на апартамент" : "Apartment renovation",
    },
    {
      href: "/services/bani",
      label: isBg ? "Ремонт на баня" : "Bathroom renovation",
    },
    {
      href: "/services/gipsokarton",
      label: isBg ? "Гипсокартон" : "Drywall",
    },
    {
      href: "/services/shpaklovki",
      label: isBg ? "Шпакловки" : "Skimming",
    },
    {
      href: "/services/vik-instalacii",
      label: isBg ? "ВиК инсталации" : "Plumbing",
    },
    {
      href: "/services/el-instalacii",
      label: isBg ? "Електроинсталации" : "Electrical",
    },
    {
      href: "/prices",
      label: isBg ? "Цени" : "Prices",
    },
    {
      href: "/projects",
      label: isBg ? "Проекти" : "Projects",
    },
  ];

  return (
    <footer className="relative z-[100] bg-[#0f1426] py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-7">
          <nav
            aria-label={isBg ? "Важни страници и услуги" : "Key pages and services"}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-[#7dff94]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <address className="flex flex-col items-center gap-4 not-italic md:flex-row md:flex-wrap md:justify-center md:gap-x-10">
            <a
              href={`tel:${business.phoneE164}`}
              className="flex items-center gap-3 text-[#4da855] transition-colors hover:text-[#7dff94]"
            >
              <PhoneIcon />
              <span className="text-sm font-medium">{business.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 text-[#4da855] transition-colors hover:text-[#7dff94]"
            >
              <EmailIcon />
              <span className="text-sm font-medium">{business.email}</span>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium text-gray-300 transition-colors hover:text-[#7dff94]"
            >
              {isBg ? business.address.bg : business.address.en}
            </a>
          </address>

          <p className="text-center text-sm text-gray-400">
            {isBg
              ? `Работно време: Понеделник – Петък, ${business.workingHours.weekdays}`
              : `Working hours: Monday – Friday, ${business.workingHours.weekdays}`}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#4da855] transition-colors hover:text-[#7dff94]"
              aria-label={isBg ? "Sensor Build във Facebook" : "Sensor Build on Facebook"}
            >
              <FacebookIcon />
              <span className="text-sm font-medium">Facebook</span>
            </a>

            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#4da855] transition-colors hover:text-[#7dff94]"
              aria-label={isBg ? "Sensor Build в Instagram" : "Sensor Build on Instagram"}
            >
              <InstagramIcon />
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a
              href={business.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#4da855] transition-colors hover:text-[#7dff94]"
              aria-label={isBg ? "Sensor Build в LinkedIn" : "Sensor Build on LinkedIn"}
            >
              <LinkedinIcon />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
