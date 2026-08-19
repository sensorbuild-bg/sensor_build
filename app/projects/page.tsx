import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Ремонтни проекти в София',
  description:
    'Разгледайте изпълнени ремонтни проекти на Sensor Build в София – електро- и ВиК инсталации, подово отопление, гипсокартон, осветление и довършителни работи.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Ремонтни проекти в София | Sensor Build',
    description:
      'Реални изпълнени обекти и етапи на работа от Sensor Build в София.',
    url: '/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
