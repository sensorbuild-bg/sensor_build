import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Как работим при ремонт в София',
  description:
    'Как протича ремонтът в София – оглед, уточняване на дейностите, оферта, координирано изпълнение и предаване. Какво да подготвите преди оглед.',
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
