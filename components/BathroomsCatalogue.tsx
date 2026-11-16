"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { bathroomProjects } from "@/lib/bathroomProjects";

/**
 * A scalable category: every new completed bathroom is added as another card,
 * rather than replacing the current one or duplicating page markup.
 */
export default function BathroomsCatalogue() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";

  const renovationStages = isBg
    ? [
        { title: "Къртене и подготовка", text: "Премахване на старите покрития и преценка на състоянието на основите преди новите работи." },
        { title: "ВиК и електроинсталации", text: "Планиране на местата на санитарията, водопроводните точки, контактите и осветлението." },
        { title: "Предстенни обшивки и хидроизолация", text: "Подготовка на подходяща основа и изпълнение на хидроизолация в необходимите мокри зони." },
        { title: "Плочки и довършване", text: "Разпределение и полагане на облицовките, фугиране и изпълнение на преходите между материалите." },
        { title: "Монтаж на мебели и санитария", text: "Монтаж на мивка, тоалетна, смесители, шкафове и останалите предвидени елементи." },
      ]
    : [
        { title: "Demolition and preparation", text: "Removal of old finishes and assessment of existing substrates before new work begins." },
        { title: "Plumbing and electrical work", text: "Planning positions for sanitary fittings, water connections, sockets and lighting." },
        { title: "Wall linings and waterproofing", text: "Preparing suitable surfaces and applying waterproofing in the required wet areas." },
        { title: "Tiling and finishes", text: "Laying tiles, grouting and carefully forming transitions between materials." },
        { title: "Fixtures and furniture", text: "Installing the basin, toilet, taps, cabinetry and other specified fittings." },
      ];


  const frequentlyAsked = isBg
    ? [
        {
          question: "Трябва ли задължително да се подмени ВиК инсталацията?",
          answer: "Зависи от състоянието на съществуващите тръби, връзките и новото разположение на санитарията. При оглед се уточнява кои участъци могат да се запазят и кои трябва да се преработят.",
        },
        {
          question: "Защо хидроизолацията се изпълнява преди облицовките?",
          answer: "Плочките и фугите не заменят хидроизолационната система. След подготовката на основата се обработват предвидените мокри зони и критичните детайли около ъгли, връзки и преминавания, преди да се положат плочките.",
        },
        {
          question: "Какво влияе върху цената на основен ремонт на баня?",
          answer: "Значение имат демонтажът, състоянието на основата, нуждата от нови ВиК и електрически точки, предстенните обшивки, размерите и разпределението на плочките, както и избраните мебели и санитария. Затова крайната оферта се уточнява според обекта.",
        },
      ]
    : [
        {
          question: "Does the plumbing always need replacing?",
          answer: "That depends on the existing pipes, connections and the proposed position of sanitary fittings. The site visit helps determine what can stay and what must change.",
        },
        {
          question: "Why waterproof before tiling?",
          answer: "Tiles and grout do not replace a waterproofing system. After surface preparation, the specified wet areas and details at corners and penetrations are treated before the tiles are laid.",
        },
        {
          question: "What affects a complete bathroom renovation price?",
          answer: "Removal works, existing substrates, new plumbing and electrical points, wall linings, tile layout and sizes, and chosen fittings all affect the scope. The final quotation therefore depends on the property.",
        },
      ];

  return (
    <div className={`min-h-screen ${isBg ? "bg-[#13182c] text-white" : "bg-white text-[#13182c]"}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#62b946]">
            SENSOR BUILD
          </p>
          <h1 className="text-3xl font-noah-bold md:text-5xl">
            {isBg ? "Ремонт на бани в София – изпълнени обекти" : "Bathroom renovations – completed projects"}
          </h1>
          <p className={`mt-5 text-base leading-relaxed md:text-lg ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Извършваме основни ремонти на бани в София – от къртенето, ВиК и електроинсталациите до хидроизолацията, облицовките и монтажа на санитария. Разгледайте изпълнения ни обект със снимки, видео и 360° оглед."
              : "We carry out complete bathroom renovations in Sofia, from demolition and installations to waterproofing, tiling and sanitary fittings. Explore a completed project with photos, video and a 360° tour."}
          </p>
        </div>

        <section aria-label={isBg ? "Завършени бани" : "Completed bathrooms"}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bathroomProjects.map((project) => (
              <Link
                href={project.href}
                key={project.slug}
                className={`group overflow-hidden rounded-2xl border shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-white"}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0f1427]">
                  <Image
                    src={project.cover}
                    alt={isBg ? project.titleBg : project.titleEn}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-[37%_50%] transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                  />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-[#13182c]/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {isBg ? "Видео · 360° · Снимки" : "Video · 360° · Photos"}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold leading-snug md:text-2xl">
                    {isBg ? project.titleBg : project.titleEn}
                  </h2>
                  <p className={`mt-3 line-clamp-3 text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>
                    {isBg ? project.descriptionBg : project.descriptionEn}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm font-semibold text-[#62b946]">
                    <span>{isBg ? "Разгледай банята" : "Explore this bathroom"}</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="bathroom-renovation-stages" className="mt-12 md:mt-16">
          <h2 id="bathroom-renovation-stages" className="text-2xl font-semibold md:text-3xl">
            {isBg ? "Какво включва основният ремонт на баня?" : "What is included in a complete bathroom renovation?"}
          </h2>
          <p className={`mt-3 max-w-4xl leading-relaxed ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Конкретните дейности зависят от състоянието и разпределението на помещението. Обикновено работата преминава през следните етапи:"
              : "The scope depends on the condition and layout of the room. Work typically follows these stages:"}
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {renovationStages.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-2xl border p-5 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}
              >
                <span className="text-sm font-bold text-[#62b946]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className={`mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm ${isBg ? "text-white/80" : "text-gray-700"}`}>
            <span className="font-semibold">{isBg ? "Свързани услуги:" : "Related services:"}</span>
            <Link href="/services/vik-instalacii" className="text-[#62b946] hover:underline">
              {isBg ? "ВиК инсталации" : "Plumbing"}
            </Link>
            <Link href="/services/el-instalacii" className="text-[#62b946] hover:underline">
              {isBg ? "Електроинсталации" : "Electrical"}
            </Link>
            <Link href="/services/fayans-terakot-granitogres" className="text-[#62b946] hover:underline">
              {isBg ? "Лепене на плочки" : "Tiling"}
            </Link>
            <Link href="/prices" className="text-[#62b946] hover:underline">
              {isBg ? "Ориентировъчни цени" : "Indicative prices"}
            </Link>
          </div>
        </section>

        <section aria-labelledby="bathroom-planning-questions" className="mt-12 md:mt-16">
          <h2 id="bathroom-planning-questions" className="text-2xl font-semibold md:text-3xl">
            {isBg ? "Важни въпроси преди ремонт на баня" : "Important questions before renovating a bathroom"}
          </h2>
          <p className={`mt-3 max-w-4xl leading-relaxed ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Когато сравнявате оферти за ремонт на баня в София, уточнете не само квадратурата, а и как са предвидени инсталациите, хидроизолацията и подготовката на основите."
              : "When comparing bathroom renovation quotations in Sofia, consider not just the floor area but also the services, waterproofing and substrate preparation included."}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {frequentlyAsked.map((item) => (
              <article key={item.question} className={`rounded-2xl border p-5 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}>
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>{item.answer}</p>
              </article>
            ))}
          </div>
          <p className={`mt-6 max-w-4xl leading-relaxed ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "В завършения ни проект са документирани къртенето, новите ВиК разводки, металната конструкция, обшивката, хидроизолацията, облицовките и готовата баня."
              : "Our completed bathroom project documents demolition, new plumbing, wall framing, lining, waterproofing, tiling and the finished room."}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <Link href={bathroomProjects[0].href} className="font-semibold text-[#62b946] hover:underline">
              {isBg ? "Разгледай снимките от етапите" : "See the actual renovation stages"} →
            </Link>
            <Link href="/how-we-work" className="font-semibold text-[#62b946] hover:underline">
              {isBg ? "Как протича работата с нас" : "How our process works"} →
            </Link>
          </div>
        </section>

        <aside className={`mt-12 rounded-2xl border px-6 py-8 text-center md:mt-16 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}>
          <h2 className="text-2xl font-semibold">
            {isBg ? "Планирате ремонт на баня?" : "Planning a bathroom renovation?"}
          </h2>
          <p className={`mx-auto mt-3 max-w-2xl text-base ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Разкажете ни за помещението и какво искате да промените. Ще обсъдим необходимите дейности и ще организираме оглед."
              : "Tell us about your room and the changes you have in mind. We can discuss the work involved and arrange a site visit."}
          </p>
          <Link
            href="/contacts"
            className="mt-6 inline-flex rounded-xl bg-[#388644] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2d6b35]"
          >
            {isBg ? "Заяви оглед" : "Request a site visit"}
          </Link>
        </aside>
      </div>
    </div>
  );
}
