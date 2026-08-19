export const projectSeo = {
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
} as const;

export type ProjectId = keyof typeof projectSeo;

export const projectIds = Object.keys(projectSeo) as ProjectId[];

export function isProjectId(id: string): id is ProjectId {
  return id in projectSeo;
}
