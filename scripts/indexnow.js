const https = require('https');

const HOST = 'ppplayer.com';
const KEY = '89672819860ae89515d68ecd19484382';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: [
    `https://${HOST}/`,
    `https://${HOST}/download`,
    `https://${HOST}/changelog`,
    `https://${HOST}/support`,
    `https://${HOST}/privacy`,
    `https://${HOST}/terms`
  ]
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
