import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://ppplayer.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const coreRoutes = [
    '',
    '/download',
    '/changelog',
    '/support',
    '/privacy',
    '/terms',
    '/blog'
  ];

  // Add core routes for all locales
  routing.locales.forEach((locale) => {
    const localePrefix = locale === routing.defaultLocale ? '' : `/${locale}`;
    
    coreRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${BASE_URL}${localePrefix}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/changelog' || route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });

    // Add blog posts
    const posts = getAllPosts(locale);
    posts.forEach((post) => {
      if (!post.isDraft) {
        sitemapEntries.push({
          url: `${BASE_URL}${localePrefix}/blog/${post.slug}`,
          lastModified: new Date(post.date),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    });
  });

  return sitemapEntries;
}
