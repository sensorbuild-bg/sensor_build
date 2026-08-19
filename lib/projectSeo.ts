export const projectSeo = {
  '0': {
    title: 'Освежителен ремонт на жилище в София',
    description:
      'Реален проект за освежителен ремонт – защита на обекта, корекции по стените, електрически точки, боядисване и чисто финално предаване.',
    image: '/project1/main.webp',
    images: [
      '/project1/main.webp',
      '/project1/01.webp',
      '/project1/02.webp',
      '/project1/03.webp',
      '/project1/04.webp',
    ],
  },
  '1': {
    title: 'Изграждане на електроинсталация в София',
    description:
      'Реален проект за цялостна електроинсталация – планиране на точки, силнотокови и слаботокови линии, табла, тестване и защита.',
    image: '/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp',
    images: [
      '/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp',
      '/project2/20250506_115318-ezgif.com-jpg-to-webp-converter.webp',
      '/project2/20250806_190601-ezgif.com-jpg-to-webp-converter.webp',
      '/project2/20250908_091236-ezgif.com-jpg-to-webp-converter.webp',
    ],
  },
  '2': {
    title: 'Изграждане на ВиК инсталация в София',
    description:
      'Реален проект за ВиК инсталации – водопровод, канализация, трасета, санитарни точки и проверка на системата преди завършване.',
    image: '/project3/20250723_174911_main.webp',
    images: [
      '/project3/20250723_174911_main.webp',
      '/project3/20250723_174903.webp',
      '/project3/20251013_135225.webp',
    ],
  },
  '3': {
    title: 'Изграждане на подово отопление в София',
    description:
      'Реален проект за водно подово отопление – подготовка, изолация, полагане на тръби, колектор и проверка на системата.',
    image: '/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp',
    images: [
      '/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp',
      '/project4/20251008_150718-ezgif.com-jpg-to-webp-converter.webp',
      '/project4/20251008_152831-ezgif.com-jpg-to-webp-converter.webp',
      '/project4/20251016_181739-ezgif.com-jpg-to-webp-converter.webp',
    ],
  },
  '4': {
    title: 'Монтаж на гипсокартон в София – реален проект',
    description:
      'Реален проект с гипсокартон – конструкция, обшивки, тавани и детайли, изпълнени от Sensor Build.',
    image: '/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp',
    images: [
      '/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp',
      '/project5/20251109_084251-ezgif.com-jpg-to-webp-converter.webp',
      '/project5/20251207-living-room-gypsum-before.webp',
      '/project5/20251223-living-room-gypsum-after.webp',
    ],
  },
  '5': {
    title: 'Монтаж на осветление в София – реален проект',
    description:
      'Реален проект за монтаж на осветление с изпълнени осветителни точки и завършващи дейности от Sensor Build.',
    image: '/project6/20250925_132227_main.webp',
    images: [
      '/project6/20250925_132227_main.webp',
      '/project6/20241219_163424-ezgif.com-jpg-to-webp-converter.webp',
      '/project6/20251001_145701.webp',
      '/project6/20251115_182915.webp',
      '/project6/20251115_182920-ezgif.com-jpg-to-webp-converter.webp',
    ],
  },
} as const;

export type ProjectId = keyof typeof projectSeo;

export const projectIds = Object.keys(projectSeo) as ProjectId[];

export function isProjectId(id: string): id is ProjectId {
  return id in projectSeo;
}
