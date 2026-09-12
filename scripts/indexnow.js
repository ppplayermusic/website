/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');

const fs = require('fs');
const path = require('path');

const HOST = 'ppplayer.com';
const KEY = '89672819860ae89515d68ecd19484382';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

const coreRoutes = [
  '',
  '/download',
  '/changelog',
  '/support',
  '/privacy',
  '/terms',
  '/blog'
];

let urlList = [];

locales.forEach(locale => {
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  coreRoutes.forEach(route => {
    urlList.push(`https://${HOST}${localePrefix}${route}`);
  });
});

const blogDir = path.join(__dirname, '../content/blog');
if (fs.existsSync(blogDir)) {
  const slugs = fs.readdirSync(blogDir).filter(file => {
    return fs.statSync(path.join(blogDir, file)).isDirectory();
  });
  
  slugs.forEach(slug => {
    const enFile = path.join(blogDir, slug, 'en.md');
    if (fs.existsSync(enFile)) {
      const content = fs.readFileSync(enFile, 'utf8');
      // Only submit non-draft posts
      if (!content.includes('isDraft: true')) {
        locales.forEach(locale => {
          const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
          urlList.push(`https://${HOST}${localePrefix}/blog/${slug}`);
        });
      }
    }
  });
}

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('✅ Successfully submitted URLs to IndexNow!');
      console.log(`Status Code: ${res.statusCode}`);
    } else {
      console.error('❌ Failed to submit URLs to IndexNow.');
      console.error(`Status Code: ${res.statusCode}`);
      console.error(`Response: ${data}`);
    }
  });
});

req.on('error', (e) => {
  console.error(`❌ Request error: ${e.message}`);
});

req.write(payload);
req.end();
