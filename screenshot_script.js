const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  
  const html = await page.content();
  console.log(html.substring(0, 1000)); // Print just the start to verify it loaded
  
  await browser.close();
})();
