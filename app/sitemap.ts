import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.sensorbuild.bg';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/services',
    '/projects',
    '/prices',
    '/contacts',
    '/osvetlenie',
    '/how-we-work',
  ];

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

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
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
