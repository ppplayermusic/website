const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  await page.goto('http://localhost:3000/download');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'download_page_top.png' });
  
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'download_page_mid.png' });
  
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'download_page_bottom.png' });

  await browser.close();
})();
