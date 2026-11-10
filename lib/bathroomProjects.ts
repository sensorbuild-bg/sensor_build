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
      "Реално изпълнена баня с вана, вградени шкафове, облицовки и санитария. Разгледайте кратко видео, интерактивна 360° панорама и снимки от обекта.",
    descriptionEn:
      "A completed bathroom with a bathtub, cabinetry, wall and floor finishes, and sanitary fittings. Explore the video, interactive 360° panorama and site photos.",
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
