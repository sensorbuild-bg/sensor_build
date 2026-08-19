import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';

type PageProps = {
  params: Promise<{ id: string }>;
};

const projectSeo: Record<
  string,
  { title: string; description: string; image: string }
> = {
  '0': {
    title: 'Освежителен ремонт на жилище в София',
    description:
      'Реален проект за освежителен ремонт – защита на обекта, корекции по стените, електрически точки, боядисване и чисто финално предаване.',
    image: '/project1/main.webp',
  },
  '1': {
    title: 'Изграждане на електроинсталация в София',
    description:
      'Реален проект за цялостна електроинсталация – планиране на точки, силнотокови и слаботокови линии, табла, тестване и защита.',
    image: '/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp',
  },
  '2': {
    title: 'Изграждане на ВиК инсталация в София',
    description:
      'Реален проект за ВиК инсталации – водопровод, канализация, трасета, санитарни точки и проверка на системата преди завършване.',
    image: '/project3/20250723_174911_main.webp',
  },
  '3': {
    title: 'Изграждане на подово отопление в София',
    description:
      'Реален проект за водно подово отопление – подготовка, изолация, полагане на тръби, колектор и проверка на системата.',
    image: '/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp',
  },
  '4': {
    title: 'Монтаж на гипсокартон в София – реален проект',
    description:
      'Реален проект с гипсокартон – конструкция, обшивки, тавани и детайли, изпълнени от Sensor Build.',
    image: '/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp',
  },
  '5': {
    title: 'Монтаж на осветление в София – реален проект',
    description:
      'Реален проект за монтаж на осветление с изпълнени осветителни точки и завършващи дейности от Sensor Build.',
    image: '/project6/20250925_132227_main.webp',
  },
};

export function generateStaticParams() {
  return Object.keys(projectSeo).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const seo = projectSeo[id];

  if (!seo) {
    return {
      title: 'Проектът не е намерен',
      robots: { index: false, follow: true },
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title: `${seo.title} | Sensor Build`,
      description: seo.description,
      url: `/projects/${id}`,
      type: 'website',
      images: [
        {
          url: seo.image,
          alt: seo.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const seo = projectSeo[id];

  if (!seo) notFound();

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Проекти',
        item: 'https://www.sensorbuild.bg/projects',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: seo.title,
        item: `https://www.sensorbuild.bg/projects/${id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, '\\u003c'),
        }}
      />
      <ProjectClient />
    </>
  );
}
