import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import GlobalBackButton from "@/components/GlobalBackButton";
import Script from "next/script"; // ✅ ДОБАВЕНО

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sensor Build - Строителство и ремонти",
  description: "Sensor Build - професионално строителство и ремонти",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      
      {/* ✅ GOOGLE ANALYTICS */}
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            
            <Header />

            {/* 🔙 BackButton – горе */}
            <GlobalBackButton />

            <main className="min-h-screen">
              {children}
            </main>

            {/* 🔙 BackButton – долу */}
            <GlobalBackButton />

            <Footer />

          </ThemeProvider>
        </LanguageProvider>

        <Analytics />
      </body>
    </html>
  );
}
