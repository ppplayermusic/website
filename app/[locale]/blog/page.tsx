import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';
import BlogGrid from '@/components/BlogGrid';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  
  // Use fallbacks for blog metadata since it was just added to translations
  const title = t.has('blogTitle') ? t('blogTitle') : 'Blog | PPPlayer';
  const description = t.has('blogDesc') ? t('blogDesc') : 'News, updates, and stories from the PPPlayer team.';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  let posts = getAllPosts(locale);
  let isFallback = false;
  
  if (posts.length === 0 && locale !== 'en') {
      posts = getAllPosts('en');
      isFallback = true;
  }
  


  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg-base)] pt-32 pb-24">
         <BlogGrid posts={posts} isFallback={isFallback} />
      </main>
      <Footer />
    </>
  );
}
