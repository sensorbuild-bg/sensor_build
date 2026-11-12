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

export type BathroomRenovationStage = {
  src: string;
  titleBg: string;
  titleEn: string;
  altBg: string;
  altEn: string;
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
  renovationStages: BathroomRenovationStage[];
};

export const bathroomProjects: BathroomProject[] = [
  {
    slug: "zavarshena-banya",
    href: "/projects/zavarshena-banya",
    titleBg: "Завършена баня с мраморни и дървесни декори",
    titleEn: "Completed bathroom with marble and wood-effect finishes",
    descriptionBg:
      "Цялостен основен ремонт на баня – от къртенето, изграждането на предстенна обшивка и полагането на хидроизолация до новите ВиК и електроинсталации, облицовките и монтажа на мебели и санитария. Отличителен детайл е преходът от шестоъгълни плочки в душ зоната към дървесен декор.",
    descriptionEn:
      "Complete bathroom renovation – from demolition and the construction of wall lining and application of waterproofing to plumbing, electrical works, tiling, furniture and sanitary fittings. The shower features hexagonal tiles transitioning into wood-effect finishes.",
    detailsBg: [
      "Извършен е основен ремонт на банята – от къртенето и подготовката на помещението, през изграждането на предстенна обшивка, изпълнението на ВиК и електроинсталациите и полагането на хидроизолация, до облицоването с плочки и окончателния монтаж на мебелите и санитарното оборудване.",
      "Особен акцент в проекта е оформлението на душ зоната. Там са използвани шестоъгълни плочки, които постепенно преливат в плочки с дървесен декор, а след това преминават в цели плочки с дървесна визия.",
      "Основната стенна облицовка е с формат 60 × 30 см, а подовите плочки са с размер 90 × 15 см. Съчетанието между мраморните повърхности и дървесните текстури създава завършен и хармоничен интериор.",
    ],
    detailsEn: [
      "The bathroom underwent a complete renovation – from demolition and preparation, through wall lining construction, plumbing and electrical installation works and waterproofing, to tiling and the final installation of furniture and sanitary fittings.",
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
        src: "/projects/bathroom/gallery/banya-sled-obzor-izpravena.webp",
        altBg: "Завършена баня след основен ремонт – общ изглед към вана, мивка, мебели и облицовки с дървесен декор",
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
    ],
    renovationStages: [
      {
        src: "/projects/bathroom/gallery/banya-etap-01-kartene.webp",
        titleBg: "Къртене и подготовка",
        titleEn: "Demolition and preparation",
        altBg: "Баня след демонтаж на старите облицовки – открити стени и рамка за вградено казанче",
        altEn: "Bathroom after demolition – stripped walls and concealed toilet cistern frame",
      },
      {
        src: "/projects/bathroom/gallery/banya-etap-02-vik.webp",
        titleBg: "Изграждане на ВиК разводки",
        titleEn: "Plumbing installation",
        altBg: "Нови ВиК трасета с изолирани водопроводни тръби и канализационни връзки",
        altEn: "New insulated water supply pipework and drainage connections during bathroom renovation",
      },
      {
        src: "/projects/bathroom/gallery/banya-etap-03-predstenna-konstrukcia.webp",
        titleBg: "Конструкция за предстенна обшивка",
        titleEn: "Wall lining framework",
        altBg: "Метална конструкция за предстенна обшивка около ВиК инсталациите и вграденото казанче",
        altEn: "Metal stud framing for bathroom wall lining around plumbing and concealed cistern",
      },
      {
        src: "/projects/bathroom/gallery/banya-etap-04-gipsokarton.webp",
        titleBg: "Обшивка с гипсокартон",
        titleEn: "Plasterboard wall lining",
        altBg: "Обшивка с влагоустойчив гипсокартон и обработени фуги в баня",
        altEn: "Moisture-resistant plasterboard wall lining with treated joints in the bathroom",
      },
      {
        src: "/projects/bathroom/gallery/banya-etap-05-hidroizolacia.webp",
        titleBg: "Полагане на хидроизолация",
        titleEn: "Waterproofing application",
        altBg: "Хидроизолационно покритие върху стенната обшивка на баня преди полагането на плочки",
        altEn: "Waterproofing coating on bathroom wall lining before tiling",
      },
      {
        src: "/projects/bathroom/gallery/banya-etap-06-oblicovki.webp",
        titleBg: "Полагане на стенни и подови плочки",
        titleEn: "Wall and floor tiling",
        altBg: "Облицована баня с мраморен ефект, дървесни плочки и шестоъгълни плочки в душ зоната преди окончателния монтаж",
        altEn: "Bathroom tiling with marble effect, wood look tiles and hexagonal shower tiles before final fittings",
      },
      {
        src: "/projects/bathroom/gallery/banya-etap-07-zavurshena-banya.webp",
        titleBg: "Завършен ремонт",
        titleEn: "Completed bathroom",
        altBg: "Завършена баня след основен ремонт – нова мивка, шкафове, огледало, вана и душ",
        altEn: "Completed bathroom renovation with new basin, vanity, mirrored cabinet, bathtub and shower",
      },
    ],
  },
];

export function getBathroomProject(slug: string) {
  return bathroomProjects.find((project) => project.slug === slug);
}
