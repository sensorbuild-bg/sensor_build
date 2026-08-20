import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Осветление Vivalux – доставка и монтаж',
  description:
    'Осветителни тела Vivalux с доставка и стандартен монтаж от Sensor Build – интериорно, външно, индустриално, аварийно и градинско осветление.',
  alternates: {
    canonical: '/osvetlenie',
  },
  openGraph: {
    title: 'Осветление Vivalux – доставка и монтаж | Sensor Build',
    description:
      'Подбор, доставка и монтаж на осветление за жилища, офиси, общи части и външни пространства.',
    url: '/osvetlenie',
    type: 'website',
  },
};

export default function LightingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The catalog still carries legacy top padding from the old fixed-header layout.
  // Offset it here so the current sticky header does not create a large empty gap.
  return <div className="-mt-[110px] md:-mt-[120px]">{children}</div>;
}
