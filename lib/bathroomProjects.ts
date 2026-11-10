/**
 * Add one object per finished bathroom.
 *
 * Once a matching before image exists, add an entry to beforeAfterPairs
 * with photos captured from the same viewpoint. No simulated "before" shots.
 */
export type BathroomComparison = {
  before: string;
  after: string;
  titleBg: string;
  titleEn: string;
};

export type BathroomProject = {
  slug: string;
  href: string;
  titleBg: string;
  titleEn: string;
  descriptionBg: string;
  descriptionEn: string;
  detailsBg: string[];
  detailsEn: string[];
  cover: string;
  videoWebm: string;
  videoMp4: string;
  videoPoster: string;
  panorama: string;
  gallery: { src: string; altBg: string; altEn: string }[];
  beforeAfterPairs: BathroomComparison[];
};

export const bathroomProjects: BathroomProject[] = [
  {
    slug: "zavarshena-banya",
    href: "/projects/zavarshena-banya",
    titleBg: "Завършена баня с мраморни и дървесни декори",
    titleEn: "Completed bathroom with marble and wood-effect finishes",
    descriptionBg:
      "Цялостен основен ремонт на баня – от къртенето и новите ВиК и електроинсталации до облицовките, монтажа на мебели и санитария. Отличителен детайл е преходът от шестоъгълни плочки в душ зоната към дървесен декор.",
    descriptionEn:
      "Complete bathroom renovation – from demolition, plumbing and electrical works to tiling, furniture and sanitary fittings. The shower features hexagonal tiles transitioning into wood-effect finishes.",
    detailsBg: [
      "Извършен е основен ремонт на банята – от къртенето и подготовката на помещението, през ВиК и електроинсталационните работи и полагането на облицовките, до окончателния монтаж на мебелите и санитарното оборудване.",
      "Особен акцент в проекта е оформлението на душ зоната. Там са използвани шестоъгълни плочки, които постепенно преливат в плочки с дървесен декор, а след това преминават в цели плочки с дървесна визия.",
      "Основната стенна облицовка е с формат 60 × 30 см, а подовите плочки са с размер 90 × 15 см. Съчетанието между мраморните повърхности и дървесните текстури създава завършен и хармоничен интериор.",
    ],
    detailsEn: [
      "The bathroom underwent a complete renovation – from demolition and preparation through plumbing and electrical installation works and tiling, to the final installation of furniture and sanitary fittings.",
      "A distinctive feature is the shower area, where hexagonal tiles gradually transition into wood-effect tiles and then into full wood-effect tiles.",
      "The main wall tiles measure 60 × 30 cm and the floor tiles measure 90 × 15 cm. Marble-effect surfaces and wood textures create a cohesive interior.",
    ],
    cover: "/projects/bathroom/sensorbuild-bathroom-360.webp",
    videoWebm: "/projects/bathroom/sensorbuild-bathroom-loop.webm",
    videoMp4: "/projects/bathroom/sensorbuild-bathroom-loop.mp4",
    videoPoster: "/projects/bathroom/sensorbuild-bathroom-loop-poster.webp",
    panorama: "/projects/bathroom/sensorbuild-bathroom-360.webp",
    gallery: [
      {
        src: "/projects/bathroom/gallery/frame-02.webp",
        altBg: "Реален кадър на санитария, мебели и подова настилка в завършената баня",
        altEn: "Real view of bathroom sanitary fittings, vanity and flooring",
      },
      {
        src: "/projects/bathroom/gallery/frame-05.webp",
        altBg: "Мивка, огледален шкаф и вана с мраморни облицовки",
        altEn: "Washbasin, mirrored cabinet and bathtub with marble-effect tiles",
      },
      {
        src: "/projects/bathroom/gallery/frame-08.webp",
        altBg: "Вана, душ и стени с мраморен ефект",
        altEn: "Bathtub, shower and marble-effect wall tiles",
      },
      {
        src: "/projects/bathroom/gallery/frame-11.webp",
        altBg: "Подробен изглед на мивка и смесители",
        altEn: "Close-up of washbasin and fixtures",
      },
      {
        src: "/projects/bathroom/gallery/frame-14.webp",
        altBg: "Огледало и шкафове в завършена баня",
        altEn: "Mirrored cabinet and vanity in the completed bathroom",
      },
      {
        src: "/projects/bathroom/gallery/frame-16.webp",
        altBg: "Завършени мебели и санитария в баня",
        altEn: "Finished bathroom cabinetry and sanitary fixtures",
      },
    ],
    // Add actual "before" photos in matching angles when they are available.
    beforeAfterPairs: [],
  },
];

export function getBathroomProject(slug: string) {
  return bathroomProjects.find((project) => project.slug === slug);
}
