import type { MetadataRoute } from 'next';
import { indexedServiceSlugs } from '@/lib/serviceSeo';

const baseUrl = 'https://www.sensorbuild.bg';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/services',
    '/services/remont-na-apartament',
    '/projects',
    '/prices',
    '/contacts',
    '/osvetlenie',
    '/how-we-work',
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const servicePages: MetadataRoute.Sitemap = indexedServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
  }));

  const projectPages: MetadataRoute.Sitemap = Array.from(
    { length: 6 },
    (_, index) => ({
      url: `${baseUrl}/projects/${index}`,
    })
  );

  return [...staticPages, ...servicePages, ...projectPages];
}
