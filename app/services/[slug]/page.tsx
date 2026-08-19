import type { Metadata } from 'next';
import ServiceDetailClient from './ServiceDetailClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const seoBySlug: Record<
  string,
  { title: string; description: string }
> = {
  'el-instalacii': {
    title: 'Електроинсталации в София',
    description:
      'Изграждане и подмяна на електроинсталации в София – кабели, контакти, ключове, осветителни точки, табла и слаботокови системи.',
  },
  'vik-instalacii': {
    title: 'ВиК инсталации и ремонти в София',
    description:
      'Изграждане и ремонт на ВиК инсталации в София – водопровод, канализация, разводки за бани и кухни и подготовка за санитария.',
  },
  gipsokarton: {
    title: 'Монтаж на гипсокартон в София',
    description:
      'Монтаж на гипсокартон в София – предстенни обшивки, преградни стени, окачени тавани, ниши, куфари и декоративни решения.',
  },
  zamazki: {
    title: 'Подови замазки в София',
    description:
      'Изпълнение на подови замазки в София – нивелиране и подготовка на стабилна основа за плочки, ламинат, паркет, винил и други настилки.',
  },
  shpaklovki: {
    title: 'Шпакловка на стени и тавани в София',
    description:
      'Шпакловане на стени и тавани в София – подготовка на основата, корекция на неравности, фина шпакловка, шлайфане и подготовка за боя.',
  },
  boyadisvane: {
    title: 'Боядисване на апартаменти в София',
    description:
      'Боядисване на стени и тавани в София – защита на помещенията, подготовка, грундиране и равномерно боядисване с чист финален резултат.',
  },
  'podovi-nastilki': {
    title: 'Монтаж на подови настилки в София',
    description:
      'Монтаж на подови настилки в София – подготовка на основата, полагане на настилки, преходи и завършващи профили.',
  },
  'fayans-terakot-granitogres': {
    title: 'Лепене на плочки и гранитогрес в София',
    description:
      'Лепене на плочки, фаянс, теракот и гранитогрес в София – подготовка на основата, разпределение, рязане, полагане и фугиране.',
  },
  'podovo-otoplenie': {
    title: 'Водно подово отопление в София',
    description:
      'Изграждане на водно подово отопление в София – подготовка, изолация, тръби, колекторна кутия, управление и проверка преди замазката.',
  },
  bani: {
    title: 'Ремонт на баня в София',
    description:
      'Цялостен ремонт на баня в София – ВиК, подготовка на основата, хидроизолация, плочки, санитария и довършителни работи.',
  },
  'ofisni-prostranstva': {
    title: 'Ремонт на офиси в София',
    description:
      'Ремонти и преустройства на офиси в София – електроинсталации, структурно окабеляване, интернет, видеонаблюдение, осветление и довършителни работи.',
  },
  drugi: {
    title: 'Допълнителни ремонтни услуги в София',
    description:
      'Допълнителни строително-ремонтни услуги в София според конкретните нужди, състоянието и спецификата на обекта.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = seoBySlug[slug];

  if (!seo) {
    return {
      title: 'Ремонтни услуги в София',
      description:
        'Строителни и ремонтни услуги в София от Sensor Build – оглед, ясна оферта и професионално изпълнение.',
      alternates: {
        canonical: `/services/${slug}`,
      },
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${seo.title} | Sensor Build`,
      description: seo.description,
      url: `/services/${slug}`,
      type: 'website',
    },
  };
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
