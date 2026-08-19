import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Как работим при ремонт в София',
  description:
    'Вижте как протича работата със Sensor Build – оглед и консултация, ясна оферта, план-график, професионално изпълнение и финално предаване на ремонта.',
  alternates: {
    canonical: '/how-we-work',
  },
  openGraph: {
    title: 'Как работим при ремонт в София | Sensor Build',
    description:
      'Ясен процес от огледа и офертата до изпълнението и финалното предаване на ремонта.',
    url: '/how-we-work',
    type: 'website',
  },
};

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
