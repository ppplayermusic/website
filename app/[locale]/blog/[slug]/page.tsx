import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Link, routing } from '@/i18n/routing';
import Image from 'next/image';
import Script from 'next/script';
import AdUnit from '@/components/AdUnit';

const ADSENSE_SUPPORTED_LOCALES = new Set([
  'ar', 'bn', 'cs', 'da', 'de', 'en', 'es', 'fil', 'fr', 'hi', 'hu', 
  'id', 'it', 'ja', 'ko', 'lv', 'pl', 'pt-BR', 'ru', 'sv', 'tr', 'zh'
]);

export async function generateMetadata({params}: {params: Promise<{locale: string, slug: string}>}) {
  const {locale, slug} = await params;
  const post = getPostBySlug(slug, locale) || getPostBySlug(slug, 'en');
  
  if (!post) {
    return { title: 'Not Found' };
  }

  return {
    title: `${post.title} | PPPlayer Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export function generateStaticParams() {
  const params: { locale: string, slug: string }[] = [];
  
  routing.locales.forEach((locale) => {
    const posts = getAllPosts('en');
    posts.forEach((post) => {
      params.push({ locale, slug: post.slug });
    });
  });
  
  return params;
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  let post = getPostBySlug(slug, locale);
  let isFallback = false;

  if (!post) {
    if (locale !== 'en') {
        post = getPostBySlug(slug, 'en');
        isFallback = true;
    }
    
    if (!post) {
        notFound();
    }
  }

  const isAdEligible = !isFallback && !post.isDraft && ADSENSE_SUPPORTED_LOCALES.has(locale) && post.content.length > 500;
  
  let part1 = post.content;
  let part2 = '';
  let part3 = '';

  if (isAdEligible) {
    const match1 = post.content.match(/\n## /);
    if (match1 && match1.index) {
      part1 = post.content.substring(0, match1.index);
      const remainder = post.content.substring(match1.index);
      
      if (remainder.length > 3000) {
        const match2 = remainder.substring(1500).match(/\n## /);
        if (match2 && match2.index) {
          part2 = remainder.substring(0, 1500 + match2.index);
          part3 = remainder.substring(1500 + match2.index);
        } else {
          part2 = remainder;
        }
      } else {
        part2 = remainder;
      }
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg-base)] pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <Link href="/blog" className="text-slate-400 hover:text-white transition-colors mb-8 inline-block">
              {t.has('back') ? t('back') : '← Back to Blog'}
            </Link>
            
            {isFallback && (
              <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-200/80">
                {t.has('translationUnavailable') ? t('translationUnavailable') : 'This article is not available in your language.'}
              </div>
            )}

            <div className="flex items-center gap-3 text-sm font-medium text-slate-400 mb-6">
              <span className="text-blue-400">{post.category}</span>
              <span>•</span>
              <span>{post.readTime} {t.has('minRead') ? t('minRead') : 'min read'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  PP
                </div>
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-slate-400 text-sm">{t.has('publishedOn') ? t('publishedOn') : 'Published on'} {post.date}</div>
                </div>
              </div>
            </div>

            {post.coverImage && (
              <div className="mb-12 aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
                 <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>
            )}
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl">
            {isAdEligible && part2 ? (
              <>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{part1}</ReactMarkdown>
                <AdUnit slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID} />
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{part2}</ReactMarkdown>
                {part3 && (
                  <>
                    <AdUnit slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID_LONG} />
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{part3}</ReactMarkdown>
                  </>
                )}
              </>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
