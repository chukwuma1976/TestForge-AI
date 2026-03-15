import { chromium } from "playwright";

export async function scrapePage(url) {

    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 30000
    });


    const html = await page.content();

    await browser.close();

    return html.substring(0, 8000);
}