import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' https: http:;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com;
    img-src 'self' blob: data: https://ppplayer.com https://flagcdn.com https://www.googletagmanager.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.google.com.br https://*.google-analytics.com https://*.adtrafficquality.google https://*.analytics.google.com;
    connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.adtrafficquality.google https://*.googlesyndication.com https://*.doubleclick.net;
    font-src 'self' data: https://fonts.gstatic.com;
    frame-src 'self' https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.adtrafficquality.google;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    require-trusted-types-for 'script';
  `.replace(/\s{2,}/g, ' ').trim();

  request.headers.set('x-nonce', nonce);
  request.headers.set('Content-Security-Policy', cspHeader);

  const response = intlMiddleware(request);
  
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-BR|es|ru|tr|fr|de|hi|it|ja|ko|ar|zh)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
