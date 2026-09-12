import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Link, routing } from '@/i18n/routing';

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
            
            <div className="flex items-center justify-between border-b border-white/10 pb-8">
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
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
