export const serviceSeo = {
  'el-instalacii': {
    title: 'Електроинсталации в София',
    description:
      'Изграждане и подмяна на електроинсталации в София – кабели, контакти, ключове, осветителни точки, табла и слаботокови системи.',
    heading: {
      bg: 'Електроинсталации в София',
      en: 'Electrical installations in Sofia',
    },
    index: true,
  },
  'vik-instalacii': {
    title: 'ВиК инсталации и ремонти в София',
    description:
      'Изграждане и ремонт на ВиК инсталации в София – водопровод, канализация, разводки за бани и кухни и подготовка за санитария.',
    heading: {
      bg: 'ВиК инсталации в София',
      en: 'Plumbing installations in Sofia',
    },
    index: true,
  },
  gipsokarton: {
    title: 'Монтаж на гипсокартон в София',
    description:
      'Монтаж на гипсокартон в София – предстенни обшивки, преградни стени, окачени тавани, ниши, куфари и декоративни решения.',
    heading: {
      bg: 'Монтаж на гипсокартон в София',
      en: 'Drywall installation in Sofia',
    },
    index: true,
  },
  zamazki: {
    title: 'Подови замазки в София',
    description:
      'Изпълнение на подови замазки в София – нивелиране и подготовка на стабилна основа за плочки, ламинат, паркет, винил и други настилки.',
    heading: {
      bg: 'Подови замазки в София',
      en: 'Floor screeds in Sofia',
    },
    index: true,
  },
  shpaklovki: {
    title: 'Шпакловка на стени и тавани в София',
    description:
      'Шпакловане на стени и тавани в София – подготовка на основата, корекция на неравности, фина шпакловка, шлайфане и подготовка за боя.',
    heading: {
      bg: 'Шпакловка на стени и тавани в София',
      en: 'Wall and ceiling skimming in Sofia',
    },
    index: true,
  },
  boyadisvane: {
    title: 'Боядисване на апартаменти в София',
    description:
      'Боядисване на стени и тавани в София – защита на помещенията, подготовка, грундиране и равномерно боядисване с чист финален резултат.',
    heading: {
      bg: 'Боядисване на стени и тавани в София',
      en: 'Wall and ceiling painting in Sofia',
    },
    index: true,
  },
  'podovi-nastilki': {
    title: 'Монтаж на подови настилки в София',
    description:
      'Монтаж на подови настилки в София – подготовка на основата, полагане на настилки, преходи и завършващи профили.',
    heading: {
      bg: 'Монтаж на подови настилки в София',
      en: 'Flooring installation in Sofia',
    },
    index: true,
  },
  'fayans-terakot-granitogres': {
    title: 'Лепене на плочки и гранитогрес в София',
    description:
      'Лепене на плочки, фаянс, теракот и гранитогрес в София – подготовка на основата, разпределение, рязане, полагане и фугиране.',
    heading: {
      bg: 'Лепене на плочки и гранитогрес в София',
      en: 'Tile and porcelain stoneware installation in Sofia',
    },
    index: true,
  },
  'podovo-otoplenie': {
    title: 'Водно подово отопление в София',
    description:
      'Изграждане на водно подово отопление в София – подготовка, изолация, тръби, колекторна кутия, управление и проверка преди замазката.',
    heading: {
      bg: 'Водно подово отопление в София',
      en: 'Hydronic underfloor heating in Sofia',
    },
    index: true,
  },
  bani: {
    title: 'Ремонт на баня в София',
    description:
      'Цялостен ремонт на баня в София – ВиК, подготовка на основата, хидроизолация, плочки, санитария и довършителни работи.',
    heading: {
      bg: 'Ремонт на баня в София',
      en: 'Bathroom renovation in Sofia',
    },
    index: true,
  },
  'ofisni-prostranstva': {
    title: 'Ремонт на офиси в София',
    description:
      'Ремонти и преустройства на офиси в София – електроинсталации, структурно окабеляване, интернет, видеонаблюдение, осветление и довършителни работи.',
    heading: {
      bg: 'Ремонт на офис в София',
      en: 'Office renovation in Sofia',
    },
    index: true,
  },
  drugi: {
    title: 'Допълнителни ремонтни услуги в София',
    description:
      'Допълнителни строително-ремонтни услуги в София според конкретните нужди, състоянието и спецификата на обекта.',
    heading: {
      bg: 'Допълнителни ремонтни услуги',
      en: 'Additional renovation services',
    },
    index: false,
  },
} as const;

export type ServiceSlug = keyof typeof serviceSeo;

export const serviceSlugs = Object.keys(serviceSeo) as ServiceSlug[];

export const indexedServiceSlugs = serviceSlugs.filter(
  (slug) => serviceSeo[slug].index
);

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return slug in serviceSeo;
}
