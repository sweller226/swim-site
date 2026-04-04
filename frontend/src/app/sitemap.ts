import type { MetadataRoute } from 'next';
import { getSiteUrl } from '../seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  return [
    { url: `${siteUrl}/`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/lessons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/faq`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}