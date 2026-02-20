export type LightingCategory = "interior" | "exterior" | "industrial" | "emergency";

export type LightingSubcategory =
  | "interiorWall"
  | "interiorCeiling"
  | "downlights"
  | "panels"
  | "track"
  | "chandeliers"
  | "exteriorWall"
  | "exteriorCeiling"
  | "garden";

export type Product = {
  id: string;
  brand: "Vivalux";
  titleBg: string;
  descriptionBg: string;
  priceEur: number;
  image: string;

  category: LightingCategory;
  subcategory?: LightingSubcategory;

  flickerFree?: boolean;
  ra90?: boolean;

  ip?: string;     // напр. "IP65"
  power?: string;  // напр. "36W"
  cct?: string;    // напр. "3000K/4000K"
};

export const lightingProducts: Product[] = [
  {
    id: "bergamo-1xgu10",
    brand: "Vivalux",
    titleBg: "Фасаден аплик BERGAMO 1×GU10 – черно",
    descriptionBg: "Изчистен дизайн, подходящ за фасади и входове.",
    priceEur: 40,
    image: "/images/lighting/bergamo-gu10.jpg",
    category: "exterior",
    subcategory: "exteriorWall",
    flickerFree: true,
    ra90: true,
    ip: "IP44",
  },
  {
    id: "leo-f30-sr36",
    brand: "Vivalux",
    titleBg: "Плафониера със сензор LEO F30 SR36",
    descriptionBg: "За коридори и общи части, удобство и икономичност.",
    priceEur: 35,
    image: "/images/lighting/leo-f30-sr36.jpg",
    category: "interior",
    subcategory: "interiorCeiling",
    flickerFree: true,
    ra90: false,
  },
  {
    id: "lucas-36w",
    brand: "Vivalux",
    titleBg: "LED плафон LUCAS 36W – черно + дърво",
    descriptionBg: "Декоративен плафон с избор на цветна температура.",
    priceEur: 115,
    image: "/images/lighting/lucas-led-36w.jpg",
    category: "interior",
    subcategory: "interiorCeiling",
    flickerFree: false,
    ra90: true,
  },
  {
    id: "jex-1200",
    brand: "Vivalux",
    titleBg: "Индустриално тяло JEX PC BASE 222 – 1200 mm",
    descriptionBg: "Практично решение за гаражи, складове и работни зони.",
    priceEur: 45,
    image: "/images/lighting/jex-1200.jpg",
    category: "industrial",
    flickerFree: true,
    ra90: false,
    ip: "IP65",
  },
];
