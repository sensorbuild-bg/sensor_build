import type { MetadataRoute } from 'next';
import { projectIds, projectSeo } from '@/lib/projectSeo';
import { indexedServiceSlugs } from '@/lib/serviceSeo';

const baseUrl = 'https://www.sensorbuild.bg';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      images: [`${baseUrl}/main.webp`],
    },
    {
      url: `${baseUrl}/services`,
    },
    {
      url: `${baseUrl}/services/remont-na-apartament`,
      images: [
        `${baseUrl}/project1/main.webp`,
        `${baseUrl}/project5/20251223-living-room-gypsum-after.webp`,
      ],
    },
    {
      url: `${baseUrl}/projects`,
      images: projectIds.map((id) => `${baseUrl}${projectSeo[id].image}`),
    },
    {
      url: `${baseUrl}/prices`,
    },
    {
      url: `${baseUrl}/contacts`,
    },
    {
      url: `${baseUrl}/osvetlenie`,
      images: [`${baseUrl}/images/lighting/hero-1.jpg`],
    },
    {
      url: `${baseUrl}/how-we-work`,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = indexedServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
  }));

  const projectPages: MetadataRoute.Sitemap = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${projectSeo[id].slug}`,
    images: projectSeo[id].images.map((image) => `${baseUrl}${image}`),
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
