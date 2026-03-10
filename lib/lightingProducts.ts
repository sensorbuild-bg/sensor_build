// lib/lightingProducts.ts

export type LightingCategory =
  | "interior"
  | "exterior"
  | "industrial"
  | "emergency"
  | "commonAreas";

export type LightingSubcategory =
  | "interiorCeiling"
  | "interiorWall"
  | "chandeliers"
  | "interiorDecorative" // ✅ НОВО: декоративно (интериорно)
  | "exteriorWall"
  | "exteriorCeiling"
  | "garden"
  | "exteriorLedStrips"
  | "industrial"
  | "emergency"
  | "commonCeiling"
  | "commonWall";

export type SocketType = "GU10" | "E27" | "E14" | "Integrated LED" | "G13";

export type LightingProduct = {
  id: string;

  // BG/EN
  name: string;
  nameEn: string;

  marketingText?: string;
  marketingTextEn?: string;

  // Catalog
  category: LightingCategory;
  subcategory?: LightingSubcategory;

  // Specs (само това, което знаем)
  ip?: string;
  socket?: SocketType;
  power?: number;
  cct?: string | string[];
  voltage?: string;
  frequency?: string;
  cri?: string;
  lifetime?: number;
  beamAngle?: number;
  uvResist?: boolean;

  // Flags
  flickerFree?: boolean;
  motionSensor?: boolean;
  dimmable?: boolean;
  remoteControl?: boolean;

  // Price
  priceOnRequest?: boolean; // ✅ НОВО: „По запитване“
  price?: number; // ✅ вече е optional
  currency?: "EUR"; // ✅ вече е optional

    // ✅ Единица за продажба
  unit?: {
    bg: string;
    en: string;
  };
  
  // Image in /public
  image: string;
};

export const lightingProducts: LightingProduct[] = [
  // ---------------------------
  // INTERIOR
  // ---------------------------
  {
    id: "meandra-p-led-54w-black-cct",
    name: "LED Полилей MEANDRA-P LED 54W Черен CCT 3000–4000–6000K",
    nameEn: "MEANDRA-P LED Chandelier 54W CCT 3000–4000–6000K Black",
    marketingText:
      "Елегантен акцент за модерен интериор – избираш цветната температура според настроението и получаваш равномерна светлина.",
    marketingTextEn:
      "A sleek statement piece for modern interiors — choose the color temperature to match the mood and enjoy evenly distributed light.",
    category: "interior",
    subcategory: "chandeliers",
    power: 54,
    cct: ["3000K", "4000K", "6000K"],
    voltage: "230V",
    frequency: "50/60Hz",
    ip: "IP20",
    cri: "≥80",
    lifetime: 15000,
    beamAngle: 120,
    flickerFree: true,
    motionSensor: false,
    dimmable: false,
    remoteControl: false,
    price: 110,
    currency: "EUR",
    image: "/images/lighting/interior/chandeliers/meandra-p-led-54w-black-cct.jpg",
  },
  {
    id: "lucas-led-30w-black-wood-cct",
    name: "LED Плафон LUCAS LED 30W Черно + Дърво CCT 3000–4000–6400K",
    nameEn: "LUCAS LED Ceiling Light 30W CCT 3000–4000–6400K Black + Wood",
    marketingText:
      "Топъл дизайн с дървесен акцент и практично CCT – подходящ за дневна, кухня или коридор.",
    marketingTextEn:
      "Warm design with a wood accent and practical CCT — a great fit for living rooms, kitchens, and hallways.",
    category: "interior",
    subcategory: "interiorCeiling",
    power: 30,
    cct: ["3000K", "4000K", "6400K"],
    voltage: "230V",
    frequency: "50/60Hz",
    ip: "IP20",
    cri: "≥80",
    lifetime: 15000,
    beamAngle: 120,
    flickerFree: true,
    motionSensor: false,
    dimmable: false,
    remoteControl: false,
    price: 110,
    currency: "EUR",
    image: "/images/lighting/interior/ceiling/lucas-led-30w-black-wood-cct.jpg",
  },
  {
    id: "campo-led-36w-black-white-wood-cct",
    name: "LED Плафон CAMPO LED 36W Черно/Бяло + Дърво CCT 3000–4000–6400K",
    nameEn:
      "CAMPO LED Ceiling Light 36W CCT 3000–4000–6400K Black/White + Wood",
    marketingText:
      "Силен светлинен поток и стилна комбинация черно/бяло с дърво – осветява равномерно и прави помещението по-уютно.",
    marketingTextEn:
      "Strong light output with a stylish black/white + wood look — even illumination that makes the room feel more inviting.",
    category: "interior",
    subcategory: "interiorCeiling",
    power: 36,
    cct: ["3000K", "4000K", "6400K"],
    voltage: "230V",
    frequency: "50/60Hz",
    ip: "IP20",
    cri: "≥80",
    lifetime: 30000,
    beamAngle: 120,
    flickerFree: true,
    motionSensor: false,
    dimmable: false,
    remoteControl: false,
    price: 140,
    currency: "EUR",
    image: "/images/lighting/interior/ceiling/campo-led-36w-black-white-wood-cct.jpg",
  },
  {
    id: "dorothy-led-74w-cct-remote",
    name: "LED Плафониера DOROTHY LED 74W CCT 3000–6000K с дистанционно",
    nameEn: "DOROTHY LED Ceiling Light 74W CCT 3000–6000K with Remote",
    marketingText:
      "Максимален комфорт с дистанционно и димиране – настройваш светлината за работа, почивка или вечерна атмосфера за секунди.",
    marketingTextEn:
      "Maximum comfort with remote control and dimming — set the light for work, relaxation, or evening ambience in seconds.",
    category: "interior",
    subcategory: "interiorCeiling",
    power: 74,
    cct: ["3000K", "4000K", "6000K"],
    voltage: "230V",
    frequency: "50/60Hz",
    ip: "IP20",
    cri: "≥80",
    lifetime: 15000,
    beamAngle: 120,
    flickerFree: true,
    dimmable: true,
    remoteControl: true,
    motionSensor: false,
    price: 175,
    currency: "EUR",
    image: "/images/lighting/interior/ceiling/dorothy-led-74w-cct-remote.jpg",
  },
  {
    id: "river-led-24w-black-4000k",
    name: "LED Плафон RIVER LED 24W Черен 4000K",
    nameEn: "RIVER LED Ceiling Light 24W 4000K Black",
    marketingText:
      "Изчистен черен дизайн и неутрална светлина 4000K – практично решение за ежедневни пространства и бърз монтаж.",
    marketingTextEn:
      "Clean black design with neutral 4000K light — a practical choice for everyday spaces and quick installation.",
    category: "interior",
    subcategory: "interiorCeiling",
    power: 24,
    cct: ["4000K"],
    voltage: "230V",
    frequency: "50/60Hz",
    ip: "IP20",
    cri: "≥80",
    lifetime: 20000,
    beamAngle: 120,
    flickerFree: false,
    motionSensor: false,
    dimmable: false,
    remoteControl: false,
    price: 85,
    currency: "EUR",
    image: "/images/lighting/interior/ceiling/river-led-24w-black-4000k.jpg",
  },

  {
  id: "flat-led-18w-600mm-4000k",
  name: "LED линейно осветително тяло FLAT LED · 18W · 600 mm · 4000K",
  nameEn: "FLAT LED Linear Ceiling Light · 18W · 600 mm · 4000K",
  marketingText:
    "Компактно линейно осветително тяло за кухни, коридори и сервизни помещения. Осигурява равномерна светлина и комфорт без трептене.",
  marketingTextEn:
    "Compact linear lighting fixture for kitchens, corridors and utility spaces. Provides uniform light with flicker-free comfort.",
  category: "interior",
  subcategory: "interiorCeiling",
  ip: "IP20",
  flickerFree: true,
  voltage: "230V",
  frequency: "50/60Hz",
  power: 18,
  cct: "4000K",
  price: 32,
  currency: "EUR",
  image: "/images/lighting/interior/ceiling/flat-led-18w-600mm-4000k.jpg",
},

{
  id: "flat-led-36w-1200mm-4000k",
  name: "LED линейно осветително тяло FLAT LED · 36W · 1200 mm · 4000K",
  nameEn: "FLAT LED Linear Ceiling Light · 36W · 1200 mm · 4000K",
  marketingText:
    "Линейно осветление с по-голяма дължина и мощност – подходящо за кухни, офиси и работни помещения.",
  marketingTextEn:
    "Longer and more powerful linear lighting solution suitable for kitchens, offices and workspaces.",
  category: "interior",
  subcategory: "interiorCeiling",
  ip: "IP20",
  flickerFree: true,
  voltage: "230V",
  frequency: "50/60Hz",
  power: 36,
  cct: "4000K",
  price: 41,
  currency: "EUR",
  image: "/images/lighting/interior/ceiling/flat-led-36w-1200mm-4000k.jpg",
},

{
  id: "flat-led-45w-1500mm-4000k",
  name: "LED линейно осветително тяло FLAT LED · 45W · 1500 mm · 4000K",
  nameEn: "FLAT LED Linear Ceiling Light · 45W · 1500 mm · 4000K",
  marketingText:
    "Удължено линейно осветително тяло с висока мощност за по-големи помещения и работни пространства.",
  marketingTextEn:
    "Extended linear lighting fixture with higher output for larger rooms and workspaces.",
  category: "interior",
  subcategory: "interiorCeiling",
  ip: "IP20",
  flickerFree: true,
  voltage: "230V",
  frequency: "50/60Hz",
  power: 45,
  cct: "4000K",
  price: 50,
  currency: "EUR",
  image: "/images/lighting/interior/ceiling/flat-led-45w-1500mm-4000k.jpg",
},

  // ---------------------------
  // INTERIOR (DECORATIVE) ✅ НОВО
  // ---------------------------
{
  id: "elit-led-320-cob-24vdc-4000k-5m",
  name: "LED лента ELIT LED · 320 COB · 24VDC · 4000K · 5m",
  nameEn: "ELIT LED Strip · 320 COB · 24VDC · 4000K · 5m",

  marketingText:
    "Декоративна COB LED лента за интериор – равномерна светлина без видими диоди, висок CRI и възможност за димиране.",
  marketingTextEn:
    "Decorative COB LED strip for interiors — uniform light without visible diodes, high CRI and dimmable operation.",

  category: "interior",
  subcategory: "interiorDecorative",

  socket: "Integrated LED",
  ip: "IP20",

  cct: "4000K",
  voltage: "24VDC",

  cri: "≥90",
  flickerFree: true,
  lifetime: 25000,
  beamAngle: 120,

  dimmable: true,
  motionSensor: false,

  price: 7.5,
  currency: "EUR",

  unit: {
    bg: "л.м.",
    en: "l.m.",
  },

  image:
    "/images/lighting/interior/decorative/elit-led-320-cob-24vdc-4000k-5m.jpg",
},
  {
  id: "brix-led-360-cob-digital-24vdc-4000k-5m",
  name: "LED дигитална лента BRIX LED · 360 COB · 24VDC · 4000K · 5m",
  nameEn: "BRIX LED Digital Strip · 360 COB · 24VDC · 4000K · 5m",

  marketingText:
    "Дигитална COB LED лента с chasing ефект – създава динамични светлинни сцени без видими диоди. Подходяща за модерни интериори, ниши и декоративно осветление.",

  marketingTextEn:
    "Digital COB LED strip with chasing effect — creates dynamic lighting scenes without visible diodes. Ideal for modern interiors, niches and decorative lighting.",

  category: "interior",
  subcategory: "interiorDecorative",

  socket: "Integrated LED",
  ip: "IP20",

  cct: "4000K",
  voltage: "24VDC",

  cri: "≥90",
    flickerFree: true,
  lifetime: 25000,
  beamAngle: 120,

  dimmable: true,
  motionSensor: false,

  price: 11,
  currency: "EUR",

  unit: {
    bg: "л.м.",
    en: "l.m."
  },

  image:
    "/images/lighting/interior/decorative/brix-led-360-cob-digital-24vdc-4000k-5m.jpg",
},

{
  id: "rgb-mega-led-30-smd5050-12vdc-5m",
  name: "LED лента RGB MEGA LED · 30 SMD5050 · 12VDC · 5m",
  nameEn: "RGB MEGA LED Strip · 30 SMD5050 · 12VDC · 5m",

  marketingText:
    "RGB LED лента за декоративно осветление – позволява създаване на цветни светлинни ефекти и атмосфера в интериора.",

  marketingTextEn:
    "RGB LED strip for decorative lighting — allows creation of colorful lighting effects and ambience in interiors.",

  category: "interior",
  subcategory: "interiorDecorative",

  socket: "Integrated LED",
  ip: "IP20",

  cct: "RGB",
  voltage: "12VDC",

  lifetime: 25000,
  beamAngle: 120,

  dimmable: true,
  motionSensor: false,

  price: 7,
  currency: "EUR",

  unit: {
    bg: "л.м.",
    en: "l.m."
  },

  image:
    "/images/lighting/interior/decorative/rgb-mega-led-30-smd5050-12vdc-5m.jpg",
},

  // ---------------------------
  // EXTERIOR (WALL)
  // ---------------------------
  {
    id: "bergamo-1",
    name: "Фасаден аплик BERGAMO 1xGU10",
    nameEn: "BERGAMO Outdoor Wall Light 1xGU10 IP65",
    marketingText:
      "Изчистен цилиндричен аплик за фасада – IP65 защита за надеждна работа навън.",
    marketingTextEn:
      "Minimal cylindrical wall light for facades — IP65 protection for reliable outdoor performance.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP65",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/bergamo-wall-ip65-gu10.jpg",
  },
  {
    id: "bergamo-2",
    name: "Фасаден аплик BERGAMO 2xGU10",
    nameEn: "BERGAMO Outdoor Wall Light 2xGU10 IP65",
    marketingText:
      "Светлина нагоре и надолу (2xGU10) + IP65 – ефектно и практично за фасади и входове.",
    marketingTextEn:
      "Up & down lighting (2xGU10) with IP65 — stylish and practical for facades and entrances.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP65",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 50,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/bergamo-2xgu10-ip65.jpg",
  },
  {
    id: "aruba-white",
    name: "LED фасаден аплик ARUBA LED 6W бял CCT (3000/4000/6400K)",
    nameEn: "ARUBA LED Outdoor Wall Light 6W CCT IP65 White",
    marketingText:
      "CCT-switch за избор на светлина + IP65 – лесно напасваш ефекта към фасадата и средата.",
    marketingTextEn:
      "CCT switch + IP65 — quickly match the beam mood to your facade and surroundings.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP65",
    power: 6,
    cct: ["3000K", "4000K", "6400K"],
    voltage: "220V",
    frequency: "50/60Hz",
    cri: "≥80",
    uvResist: true,
    beamAngle: 24,
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/aruba-led-6w-cct-ip65.jpg",
  },
  {
    id: "aruba-black",
    name: "LED фасаден аплик ARUBA LED 6W черен CCT (3000/4000/6400K)",
    nameEn: "ARUBA LED Outdoor Wall Light 6W CCT IP65 Black",
    marketingText:
      "Модерен черен корпус + CCT-switch – изглежда премиум и дава контролиран светлинен ефект.",
    marketingTextEn:
      "Modern black finish + CCT switch — premium look with a controlled light effect.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP65",
    power: 6,
    cct: ["3000K", "4000K", "6400K"],
    voltage: "220V",
    frequency: "50/60Hz",
    cri: "≥80",
    uvResist: true,
    beamAngle: 24,
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/aruba-led-6w-black-cct-ip65.jpg",
  },
  {
    id: "seoul",
    name: "Фасаден аплик SEOUL/W 1xGU10 черен",
    nameEn: "SEOUL Outdoor Wall Light 1xGU10 IP44 Black",
    marketingText:
      "Компактен аплик с IP44 – удобен избор за тераси, входове и защитени външни зони.",
    marketingTextEn:
      "Compact IP44 wall light — a solid choice for terraces, entrances, and sheltered outdoor areas.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 45,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/seoul-w-1xgu10-ip44-black.jpg",
  },
  {
    id: "porto-r-1",
    name: "Фасаден аплик PORTO/R 1xGU10 черен",
    nameEn: "PORTO R Outdoor Wall Light 1xGU10 IP44 Black",
    marketingText:
      "Класически корпус и IP44 – лесно се вписва в различни фасадни решения.",
    marketingTextEn:
      "Classic body with IP44 rating — easy to match with a wide range of facade styles.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/porto-r-1xgu10-ip44-black.jpg",
  },
  {
    id: "porto-r-2",
    name: "Фасаден аплик PORTO/R 2xGU10 черен",
    nameEn: "PORTO R Outdoor Wall Light 2xGU10 IP44 Black",
    marketingText:
      "Светлина нагоре/надолу + IP44 – ефектно подчертава фасадата около входа.",
    marketingTextEn:
      "Up/down lighting with IP44 — highlights your facade beautifully around entrances.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 45,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/porto-r-2xgu10-ip44-black.jpg",
  },
  {
    id: "porto-sq-1-white",
    name: "Фасаден аплик PORTO/SQ 1xGU10 бял",
    nameEn: "PORTO SQ Outdoor Wall Light 1xGU10 IP44 White",
    marketingText:
      "Квадратен дизайн + IP44 – чиста визия за светли фасади и модерни входове.",
    marketingTextEn:
      "Square design with IP44 rating — a clean look for bright facades and modern entrances.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/porto-sq-1xgu10-ip44-white.jpg",
  },
  {
    id: "porto-sq-1-black",
    name: "Фасаден аплик PORTO/SQ 1xGU10 черен",
    nameEn: "PORTO SQ Outdoor Wall Light 1xGU10 IP44 Black",
    marketingText:
      "Квадратен черен корпус + IP44 – стилен акцент за вход, тераса или веранда.",
    marketingTextEn:
      "Square black body with IP44 protection — a stylish accent for entrances, terraces, and porches.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/porto-sq-1xgu10-ip44-black.jpg",
  },
  {
    id: "porto-sq-2-white",
    name: "Фасаден аплик PORTO/SQ 2xGU10 бял",
    nameEn: "PORTO SQ Outdoor Wall Light 2xGU10 IP44 White",
    marketingText:
      "Ефект нагоре/надолу + бял корпус – стои леко и чисто на светли фасади.",
    marketingTextEn:
      "Up/down effect with a white finish — looks clean and light on bright facades.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 45,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/porto-sq-2xgu10-ip44-white.jpg",
  },
  {
    id: "porto-sq-2-black",
    name: "Фасаден аплик PORTO/SQ 2xGU10 черен",
    nameEn: "PORTO SQ Outdoor Wall Light 2xGU10 IP44 Black",
    marketingText:
      "Двоен GU10 аплик с IP44 – прави фасадата по-изразителна и „архитектурна“.",
    marketingTextEn:
      "Double GU10 wall light with IP44 — gives your facade a sharper, architectural look.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP44",
    socket: "GU10",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 45,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/porto-sq-2xgu10-ip44-black.jpg",
  },
  {
    id: "capri-o-led-12w-4000k-ip54-white",
    name: "LED фасаден аплик CAPRI/O LED 12W 4000K бял IP54",
    nameEn: "CAPRI LED Outdoor Wall Light 12W 4000K IP54 White",
    marketingText:
      "Практичен избор за външен монтаж – 4000K неутрална светлина и IP54 защита.",
    marketingTextEn:
      "A practical outdoor option — neutral 4000K light with IP54 protection.",
    category: "exterior",
    subcategory: "exteriorWall",
    ip: "IP54",
    power: 12,
    cct: "4000K",
    voltage: "230V",
    frequency: "50/60Hz",
    cri: "≥80",
    lifetime: 30000,
    beamAngle: 120,
    uvResist: true,
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/wall/capri-o-led-12w-4000k-ip54-white.jpg",
  },

  // ---------------------------
  // EXTERIOR (CEILING)
  // ---------------------------
  {
    id: "dolce-sq-led-15w-4000k-ip65-black",
    name: "LED плафониера DOLCE/SQ LED 15W 4000K IP65",
    nameEn: "DOLCE LED Outdoor Ceiling Light 15W 4000K IP65",
    marketingText:
      "IP65 и равномерна светлина – идеална за входове, навеси, тераси и външни коридори.",
    marketingTextEn:
      "IP65-rated with even illumination — perfect for entrances, canopies, terraces, and outdoor corridors.",
    category: "exterior",
    subcategory: "exteriorCeiling",
    ip: "IP65",
    power: 15,
    cct: "4000K",
    voltage: "230V",
    frequency: "50/60Hz",
    cri: "≥80",
    lifetime: 30000,
    beamAngle: 120,
    uvResist: true,
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/ceiling/dolce-sq-led-15w-4000k-ip65-black.jpg",
  },

  // ---------------------------
  // EMERGENCY
  // ---------------------------
  {
    id: "castor-led-5w-ip65-exit",
    name: "Аварийно осветително тяло CASTOR LED 5W IP65 EXIT",
    nameEn: "CASTOR LED Emergency Exit Sign 5W IP65",
    marketingText:
      "Надеждна EXIT табела с висока защита IP65 – подходяща за стълбища, изходи и обществени сгради при аварийни ситуации.",
    marketingTextEn:
      "Reliable IP65-rated EXIT sign — ideal for staircases, exits, and public buildings in emergency situations.",
    category: "emergency",
    subcategory: "emergency",
    ip: "IP65",
    power: 5,
    voltage: "110–240V",
    frequency: "50/60Hz",
    flickerFree: false,
    motionSensor: false,
    dimmable: false,
    remoteControl: false,
    price: 50,
    currency: "EUR",
    image: "/images/lighting/emergency/castor-led-5w-ip65-exit.jpg",
  },
  {
    id: "racer-led-m-3w-emergency",
    name: "Аварийно LED осветително тяло RACER LED-M 3W",
    nameEn: "RACER LED Emergency Light 3W",
    marketingText:
      "Компактно аварийно осветление – осигурява видимост и безопасност в коридори, стълбища и общи части.",
    marketingTextEn:
      "Compact emergency light — provides visibility and safety in corridors, staircases, and common areas.",
    category: "emergency",
    subcategory: "emergency",
    ip: "IP20",
    power: 3,
    voltage: "230V",
    frequency: "50/60Hz",
    flickerFree: false,
    motionSensor: false,
    dimmable: false,
    remoteControl: false,
    price: 35,
    currency: "EUR",
    image: "/images/lighting/emergency/racer-led-m-3w-emergency.jpg",
  },

  // ---------------------------
  // INDUSTRIAL
  // ---------------------------
  {
    id: "jex-pc-base-222-1200mm",
    name: "Индустриално осветително тяло JEX PC BASE 222 LED 1200 mm 2xG13",
    nameEn: "JEX PC BASE 222 Industrial Fixture 1200mm IP65 (2xG13)",
    marketingText:
      "Здрав корпус и IP65 защита – надеждно решение за складове, халета и помещения с прах и влага.",
    marketingTextEn:
      "Rugged build with IP65 protection — a reliable choice for warehouses, halls, and dusty or humid areas.",
    category: "industrial",
    subcategory: "industrial",
    ip: "IP65",
    socket: "G13",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 45,
    currency: "EUR",
    image: "/images/lighting/industrial/jex-pc-base-222-1200mm.jpg",
  },
  {
    id: "jex-pc-base-224-1500mm",
    name: "Индустриално осветително тяло JEX PC BASE 224 LED 1500 mm 2xG13",
    nameEn: "JEX PC BASE 224 Industrial Fixture 1500mm IP65 (2xG13)",
    marketingText:
      "Удължено тяло за по-голямо покритие и IP65 защита – подходящо за работни зони и индустриални пространства.",
    marketingTextEn:
      "Longer body for wider coverage with IP65 protection — great for work areas and industrial spaces.",
    category: "industrial",
    subcategory: "industrial",
    ip: "IP65",
    socket: "G13",
    voltage: "230V",
    frequency: "50/60Hz",
    price: 55,
    currency: "EUR",
    image: "/images/lighting/industrial/jex-pc-base-224-1500mm.jpg",
  },
  {
    id: "kent-led-18w-600mm-4000k",
    name: "Индустриално LED осветително тяло KENT LED 18W 600mm 4000K IP65",
    nameEn: "KENT LED Industrial Batten 18W 600mm 4000K IP65",
    marketingText:
      "Компактно и икономично LED решение с 4000K неутрална светлина – идеално за сервизни помещения и коридори.",
    marketingTextEn:
      "Compact and efficient with neutral 4000K light — perfect for service rooms and corridors.",
    category: "industrial",
    subcategory: "industrial",
    ip: "IP65",
    power: 18,
    cct: "4000K",
    voltage: "230V",
    frequency: "50/60Hz",
    cri: "≥80",
    lifetime: 30000,
    beamAngle: 120,
    price: 35,
    currency: "EUR",
    image: "/images/lighting/industrial/kent-led-18w-600mm-4000k.jpg",
  },
  {
    id: "kent-led-36w-1200mm-4000k",
    name: "Индустриално LED осветително тяло KENT LED 36W 1200mm 4000K IP65",
    nameEn: "KENT LED Industrial Batten 36W 1200mm 4000K IP65",
    marketingText:
      "Равномерна светлина и IP65 защита – стабилен избор за складове, работни зони и помещения с високи изисквания.",
    marketingTextEn:
      "Even illumination with IP65 protection — a solid choice for warehouses and demanding work areas.",
    category: "industrial",
    subcategory: "industrial",
    ip: "IP65",
    power: 36,
    cct: "4000K",
    voltage: "230V",
    frequency: "50/60Hz",
    cri: "≥80",
    lifetime: 30000,
    beamAngle: 120,
    price: 45,
    currency: "EUR",
    image: "/images/lighting/industrial/kent-led-36w-1200mm-4000k.jpg",
  },
  {
    id: "kent-led-45w-1500mm-4000k",
    name: "Индустриално LED осветително тяло KENT LED 45W 1500mm 4000K IP65",
    nameEn: "KENT LED Industrial Batten 45W 1500mm 4000K IP65",
    marketingText:
      "Силен светлинен поток, 4000K и IP65 защита – отличен избор за халета и големи помещения, където се търси надеждна светлина.",
    marketingTextEn:
      "Strong output with 4000K light and IP65 protection — great for halls and large spaces where reliability matters.",
    category: "industrial",
    subcategory: "industrial",
    ip: "IP65",
    power: 45,
    cct: "4000K",
    voltage: "230V",
    frequency: "50/60Hz",
    cri: "≥80",
    lifetime: 30000,
    beamAngle: 120,
    price: 50,
    currency: "EUR",
    image: "/images/lighting/industrial/kent-led-45w-1500mm-4000k.jpg",
  },

  // ---------------------------
  // GARDEN
  // ---------------------------
  {
    id: "oradea-r-gu10-ip65-nickel",
    name: "Осветително тяло за земя ORADEA/R · 1xGU10 · Никел мат · IP65",
    nameEn: "ORADEA/R In-ground Light · 1xGU10 · Matte Nickel · IP65",
    marketingText:
      "Компактно тяло за вграждане в земя – идеално за алеи и дворни зони, с GU10 фасунга и защита IP65 за външни условия.",
    marketingTextEn:
      "Compact in-ground light — perfect for pathways and outdoor areas, with a GU10 socket and IP65 protection for exterior use.",
    category: "exterior",
    subcategory: "garden",
    voltage: "230V",
    frequency: "50/60Hz",
    socket: "GU10",
    ip: "IP65",
    motionSensor: false,
    price: 45,
    currency: "EUR",
    image: "/images/lighting/exterior/garden/oradea-r-gu10-ip65-vivalux.jpg",
  },
  {
    id: "acer-sp-gu10-ip65-black",
    name: "Градински прожектор ACER/SP · GU10 · Черен · IP65",
    nameEn: "ACER/SP Garden Spike Spotlight · GU10 · Black · IP65",
    marketingText:
      "Градински прожектор с колче за лесен монтаж в почва – насочваш светлината към растения, фасади и декоративни елементи. IP65 и GU10 фасунга.",
    marketingTextEn:
      "Garden spike spotlight for easy installation in soil — aim the light at plants, facades, or decorative elements. IP65 protection and GU10 socket.",
    category: "exterior",
    subcategory: "garden",
    voltage: "230V",
    frequency: "50/60Hz",
    socket: "GU10",
    ip: "IP65",
    motionSensor: false,
    price: 40,
    currency: "EUR",
    image: "/images/lighting/exterior/garden/acer-sp-gu10-ip65-vivalux.jpg",
  },
  {
    id: "pulsar-led-0-8w-ip65",
    name: "LED осветително тяло за земя PULSAR LED · 0.8W · IP65",
    nameEn: "PULSAR LED In-ground Light · 0.8W · IP65",
    marketingText:
      "LED тяло за вграждане в настилки и алеи – компактно, устойчиво и подходящо за външни условия. Интегриран LED източник и IP65 защита.",
    marketingTextEn:
      "LED in-ground light for pavements and pathways — compact, durable and suitable for outdoor use. Integrated LED source and IP65 protection.",
    category: "exterior",
    subcategory: "garden",
    power: 0.8,
    voltage: "230V",
    frequency: "50/60Hz",
    socket: "Integrated LED",
    ip: "IP65",
    lifetime: 30000,
    motionSensor: false,
    price: 45,
    currency: "EUR",
    image: "/images/lighting/exterior/garden/pulsar-led-ip65-vivalux.jpg",
  },

{
  id: "orlo-led-4000k-ip65-12vdc-5m",
  name: "LED лента ORLO LED · 4000K · 12VDC · IP65 · 5m",
  nameEn: "ORLO LED Strip · 4000K · 12VDC · IP65 · 5m",

  marketingText:
    "Водоустойчива LED лента с IP65 защита – подходяща за фасади, тераси, градини и външни декоративни решения.",

  marketingTextEn:
    "Waterproof LED strip with IP65 protection — suitable for facades, terraces, gardens and outdoor decorative lighting.",

  category: "exterior",
  subcategory: "exteriorLedStrips",

  socket: "Integrated LED",
  ip: "IP65",

  cct: "4000K",
  voltage: "12VDC",

  lifetime: 25000,
  beamAngle: 120,

  dimmable: true,
  motionSensor: false,

  price: 7,
  currency: "EUR",

  unit: {
    bg: "л.м.",
    en: "l.m.",
  },

 image:
"/images/lighting/exterior/garden/orlo-led-4000k-ip65-12vdc-5m.jpg",
},
];
