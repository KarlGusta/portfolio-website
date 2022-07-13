const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://karlgusta-portfolio-website.vercel.app/
  await page.goto('https://karlgusta-portfolio-website.vercel.app/');

  // Click text=Blogs →
  await page.locator('text=Blogs →').click();
  await page.waitForURL('https://karlgusta-portfolio-website.vercel.app/blogs');

  // Click text=freeCodeCamp English →See my contributions on freeCodeCamp's English Publication
  await page.locator('text=freeCodeCamp English →See my contributions on freeCodeCamp\'s English Publication').click();
  await page.waitForURL('https://www.freecodecamp.org/news/how-to-learn-javascript-faster/');

  await page.screenshot({ path: `portfolio_website_screen.png` })
  // ---------------------
  await context.close();
  await browser.close();
})();