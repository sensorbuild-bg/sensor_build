import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.sensorbuild.bg';

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = [
    'remont-na-apartament',
    'el-instalacii',
    'vik-instalacii',
    'gipsokarton',
    'zamazki',
    'shpaklovki',
    'boyadisvane',
    'podovi-nastilki',
    'fayans-terakot-granitogres',
    'podovo-otoplenie',
    'bani',
    'ofisni-prostranstva',
  ];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/osvetlenie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug === 'remont-na-apartament' ? 0.95 : 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = Array.from(
    { length: 6 },
    (_, index) => ({
      url: `${baseUrl}/projects/${index}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  );

  return [...staticPages, ...servicePages, ...projectPages];
}
