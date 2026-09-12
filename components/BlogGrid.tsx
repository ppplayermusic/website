'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BlogPost } from '@/lib/blog';
import { SpotlightLogo } from '@/components/ui/SpotlightLogo';

export default function BlogGrid({ posts, isFallback }: { posts: BlogPost[], isFallback: boolean }) {
  const t = useTranslations('blog');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(posts.map(p => p.category)));
  const filteredPosts = selectedCategory ? posts.filter(p => p.category === selectedCategory) : posts;

  const featuredPost = !selectedCategory && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h1>
        <p className="text-lg text-slate-400 max-w-2xl">{t('subtitle')}</p>
        
        {isFallback && (
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-200/80">
            {t('translationUnavailable')}
          </div>
        )}
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-12">
          <button 
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!selectedCategory ? 'bg-white text-black' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-white text-black' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 rounded-3xl p-6 md:p-10 border border-white/10 hover:border-white/20 transition-colors">
              <div className="order-2 md:order-1 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                  <span className="text-white bg-white/10 px-3 py-1 rounded-full">{featuredPost.category}</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} {t('minRead')}</span>
                </div>
                <h2 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{featuredPost.title}</h2>
                <p className="text-slate-400 text-lg line-clamp-3">{featuredPost.excerpt}</p>
                <div className="text-sm text-slate-300 mt-2 font-medium flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">PP</span>
                  {featuredPost.author}
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-video md:aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative flex items-center justify-center">
                 {featuredPost.coverImage ? (
                   <img src={featuredPost.coverImage} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" />
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                     <div className="opacity-15 pointer-events-none">
                       <SpotlightLogo src="/logo.png" alt="PPPlayer" className="w-48 h-48 md:w-64 md:h-64" imageClassName="filter grayscale mix-blend-screen" />
                     </div>
                   </>
                 )}
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid Posts */}
      {gridPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
              <div className="aspect-video bg-white/5 relative flex items-center justify-center border-b border-white/10 overflow-hidden">
                 {post.coverImage ? (
                   <img src={post.coverImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" />
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 group-hover:opacity-75 transition-opacity" />
                     <div className="opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity">
                       <SpotlightLogo src="/logo.png" alt="PPPlayer" className="w-32 h-32" imageClassName="filter grayscale mix-blend-screen" />
                     </div>
                   </>
                 )}
              </div>
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                  <span className="text-blue-400">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime} {t('minRead')}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>
                <div className="text-xs text-slate-500 mt-auto pt-4 border-t border-white/5">
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        !featuredPost && (
          <div className="text-center py-24 text-slate-400">
            {t('noArticles')}
          </div>
        )
      )}
    </div>
  );
}
