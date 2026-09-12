import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-BR|es|ru|tr|fr|de|hi|it|ja|ko)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
