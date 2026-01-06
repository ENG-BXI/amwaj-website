import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amwaj-ye.com';
  const locales = ['ar', 'en'];

  const routes = locales.map(lang => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1
  }));

  return [...routes];
}
