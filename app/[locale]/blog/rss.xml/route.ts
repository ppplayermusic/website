import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://ppplayer.com';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const posts = getAllPosts(locale);
  const localePrefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PPPlayer Blog (${locale})</title>
    <link>${BASE_URL}${localePrefix}/blog</link>
    <description>News, updates, and stories from the PPPlayer team.</description>
    <language>${locale}</language>
    <atom:link href="${BASE_URL}${localePrefix}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .filter((post) => !post.isDraft)
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}${localePrefix}/blog/${post.slug}</link>
      <guid>${BASE_URL}${localePrefix}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <author>${post.author}</author>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
