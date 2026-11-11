/**
 * Add one object per finished bathroom.
 *
 * Before/after photos are authentic photographs of the same room.
 * If viewpoints differ, show them side-by-side instead of overlaying them.
 * Never use simulated "before" shots.
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
    cover: "/projects/bathroom/gallery/banya-sled-mivka-dush.webp",
    videoWebm: "/projects/bathroom/sensorbuild-bathroom-loop.webm",
    videoMp4: "/projects/bathroom/sensorbuild-bathroom-loop.mp4",
    videoPoster: "/projects/bathroom/sensorbuild-bathroom-loop-poster.webp",
    panorama: "/projects/bathroom/sensorbuild-bathroom-360.webp",
    gallery: [
      {
        src: "/projects/bathroom/gallery/banya-sled-obzor.webp",
        altBg: "Завършена баня след основен ремонт – вана, мивка, мебели и подови плочки с дървесен декор",
        altEn: "Completed bathroom after full renovation – bathtub, vanity and wood-effect floor tiles",
      },
      {
        src: "/projects/bathroom/gallery/banya-sled-mivka-dush.webp",
        altBg: "Детайл на шестоъгълни плочки в душ зоната, преход към дървесен декор и шкаф с огледало",
        altEn: "Hexagonal shower tiles transitioning to wood-effect decor beside the mirrored cabinet",
      },
      {
        src: "/projects/bathroom/gallery/banya-sled-toaletna.webp",
        altBg: "Стенна тоалетна с вградено казанче, мивка и облицовка с мраморен ефект",
        altEn: "Wall-hung toilet with concealed cistern, vanity and marble-effect wall tiles",
      },
      {
        src: "/projects/bathroom/gallery/banya-sled-vrata.webp",
        altBg: "Завършен ремонт на баня – входна врата, душ хигиенен смесител и под с дървесен декор",
        altEn: "Finished bathroom entrance with hygiene shower and wood-effect flooring",
      },
      {
        src: "/projects/bathroom/gallery/banya-sled-osvetlenie.webp",
        altBg: "Окачен таван с вградени осветителни тела в ремонтирана баня",
        altEn: "Recessed ceiling lights in a newly renovated bathroom",
      },
    ],
    // Comparable areas of the real bathroom, photographed from different angles.
    // Display side-by-side; do not overlay with a split-view slider.
    beforeAfterPairs: [
      {
        before: "/projects/bathroom/gallery/banya-predi-dush-zona.webp",
        after: "/projects/bathroom/gallery/banya-sled-obzor.webp",
        titleBg: "Душ зона и общ изглед на банята",
        titleEn: "Shower area and overall bathroom view",
      },
      {
        before: "/projects/bathroom/gallery/banya-predi-mivka.webp",
        after: "/projects/bathroom/gallery/banya-sled-mivka-dush.webp",
        titleBg: "Зона с мивка, огледало и облицовки",
        titleEn: "Vanity, mirror and wall finishes",
      },
    ],
  },
];

export function getBathroomProject(slug: string) {
  return bathroomProjects.find((project) => project.slug === slug);
}
