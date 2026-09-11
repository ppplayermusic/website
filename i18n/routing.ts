import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'pt-BR', 'es', 'ru', 'tr', 'fr', 'de', 'hi', 'it', 'ja', 'ko'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // English will not have a prefix
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
