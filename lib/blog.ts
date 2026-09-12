import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  locale: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  coverImage?: string;
  content: string;
  isDraft: boolean;
}

export function getPostBySlug(slug: string, locale: string): BlogPost | null {
  const fullPath = path.join(contentDir, slug, `${locale}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (data.isDraft) {
      if (process.env.NODE_ENV === 'production') return null;
  }

  return {
    slug,
    locale,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    author: data.author,
    category: data.category,
    readTime: data.readTime,
    coverImage: data.coverImage,
    isDraft: data.isDraft || false,
    content,
  };
}

export function getAllPosts(locale: string): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  
  const slugs = fs.readdirSync(contentDir);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getAllCategories(locale: string): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}
