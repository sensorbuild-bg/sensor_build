import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sensorbuild.bg"),
  applicationName: "Sensor Build",

  title: {
    default: "Ремонти и строителство в София | Sensor Build",
    template: "%s | Sensor Build",
  },

  description:
    "Цялостни и частични ремонти в София – гипсокартон, шпакловки, боядисване, ВиК, електроинсталации, бани, настилки и подово отопление.",

  openGraph: {
    type: "website",
    locale: "bg_BG",
    siteName: "Sensor Build",
    title: "Ремонти и строителство в София | Sensor Build",
    description:
      "Цялостни и частични ремонти в София – гипсокартон, шпакловки, боядисване, ВиК, електроинсталации, бани, настилки и подово отопление.",
    images: [
      {
        url: "/logo.webp",
        alt: "Sensor Build – ремонти и строителство в София",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ремонти и строителство в София | Sensor Build",
    description:
      "Цялостни и частични ремонти в София – инсталации, гипсокартон, шпакловки, боядисване, бани и настилки.",
    images: ["/main.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8XJ5QBF4L2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XJ5QBF4L2');
          `}
        </Script>
      </head>

      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Към основното съдържание
        </a>

        <LanguageProvider>
          <Header />
          <BackButton />

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <Footer />
        </LanguageProvider>

        <Analytics />
      </body>
    </html>
  );
}
