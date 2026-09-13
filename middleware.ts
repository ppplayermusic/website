import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const analyticsProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || 'gtm';
  const isZaraz = analyticsProvider === 'zaraz';

  const scriptSrc = isZaraz 
    ? `'self' 'unsafe-eval' 'unsafe-inline' https: http:` 
    : `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' https: http:`;
    
  const trustedTypes = isZaraz ? '' : `require-trusted-types-for 'script';`;

    const googleDomains = 'https://*.google.com https://*.google.com.br https://*.google.es https://*.google.co.uk https://*.google.de https://*.google.fr https://*.google.it https://*.google.jp https://*.google.co.jp https://*.google.ca https://*.google.com.au https://*.google.co.in https://*.google.ru https://*.google.cn https://*.google.nl https://*.google.pl https://*.google.ch https://*.google.at https://*.google.be https://*.google.se https://*.google.no https://*.google.dk https://*.google.fi https://*.google.pt https://*.google.ie https://*.google.co.nz https://*.google.com.mx https://*.google.com.ar https://*.google.cl https://*.google.com.co https://*.google.com.pe https://*.google.com.sg https://*.google.com.my https://*.google.co.id https://*.google.co.th https://*.google.com.vn https://*.google.com.ph https://*.google.co.kr https://*.google.com.tw https://*.google.com.hk https://*.google.com.tr https://*.google.ae https://*.google.com.sa https://*.google.co.za';

    const cspHeader = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com;
    img-src 'self' blob: data: https://ppplayer.com https://flagcdn.com https://www.googletagmanager.com ${googleDomains} https://*.googlesyndication.com https://*.doubleclick.net https://*.google-analytics.com https://*.adtrafficquality.google https://*.analytics.google.com https://*.googleadservices.com https://*.googletagservices.com;
    connect-src 'self' ${googleDomains} https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.adtrafficquality.google https://*.googlesyndication.com https://*.doubleclick.net https://*.googleadservices.com https://*.googletagservices.com;
    font-src 'self' data: https://fonts.gstatic.com;
    frame-src 'self' https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.adtrafficquality.google;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self' https://tagassistant.google.com;
    ${trustedTypes}
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
  matcher: ['/', '/(pt-BR|es|ru|tr|fr|de|hi|it|ja|ko|ar|zh|id|my|pl|da|kk|cs|hu|ka|sv|uz|fil|lv|bn|pcm|hr|ms|fa|et)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
