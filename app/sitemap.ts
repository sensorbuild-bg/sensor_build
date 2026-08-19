import type { MetadataRoute } from 'next';
import { projectIds } from '@/lib/projectSeo';
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

  const projectPages: MetadataRoute.Sitemap = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
