const cheerio = require('cheerio'); //npm install cheerio
const puppeteer = require('puppeteer'); //npm install puppeteer

async function amazon() {
    const link = "https://www.amazon.com/Creative-Comfortable-Economic-Desktop-Pillow/dp/B07W5TWJFP/ref=sr_1_3";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);

    const pageHtml = await page.evaluate(() => {
        return document.documentElement.innerHTML;
    });
	const $ = cheerio.load(pageHtml);
	const priceBlock = $(".a-offscreen").first();
	const price = priceBlock.text();
	
	console.log(price); //logs $14.99 at the moment

    await browser.close();
}

amazon();