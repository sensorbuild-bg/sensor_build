import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Ремонтни услуги в София',
  description:
    'Строителни и ремонтни услуги в София – цялостни ремонти, гипсокартон, шпакловки, боядисване, ВиК, електроинсталации, бани, настилки, замазки и подово отопление.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Ремонтни услуги в София | Sensor Build',
    description:
      'Цялостни и частични ремонти в София с електро- и ВиК инсталации, гипсокартон, шпакловки, боядисване, бани и настилки.',
    url: '/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
