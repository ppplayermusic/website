/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');

const HOST = 'ppplayer.com';
const KEY = '89672819860ae89515d68ecd19484382';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

console.log(`Fetching sitemap from ${SITEMAP_URL}...`);

https.get(SITEMAP_URL, (res) => {
  let xmlData = '';
  res.on('data', chunk => { xmlData += chunk; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error(`Failed to fetch sitemap (Status: ${res.statusCode})`);
      return;
    }

    const urlMatches = xmlData.matchAll(/<loc>(.*?)<\/loc>/g);
    const urlList = Array.from(urlMatches).map(match => match[1]);

    if (!urlList.includes(SITEMAP_URL)) {
      urlList.push(SITEMAP_URL);
    }

    if (urlList.length === 0) {
      console.error('No URLs found in sitemap.xml.');
      return;
    }

    console.log(`Found ${urlList.length} URLs in sitemap. Submitting to IndexNow...`);

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

    const req = https.request(options, (postRes) => {
      let data = '';
      postRes.on('data', (chunk) => { data += chunk; });
      postRes.on('end', () => {
        if (postRes.statusCode >= 200 && postRes.statusCode < 300) {
          console.log(`Successfully submitted ${urlList.length} URLs to IndexNow!`);
        } else {
          console.error('Failed to submit URLs to IndexNow.');
          console.error(`Status Code: ${postRes.statusCode}`);
          console.error(`Response: ${data}`);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`Request error: ${e.message}`);
    });

    req.write(payload);
    req.end();
  });
}).on('error', (e) => {
  console.error(`Failed to fetch sitemap: ${e.message}`);
});
