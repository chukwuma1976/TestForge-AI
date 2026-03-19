import { chromium } from "playwright";

export async function scrapePage(url) {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "domcontentloaded" });

    const baseHTML = await page.content();

    // Extract links
    const links = await page.$$eval("a", anchors =>
        anchors.map(a => a.href)
    );

    // Filter links
    const baseDomain = new URL(url).origin;

    const filteredLinks = links
        .filter(link => link.startsWith(baseDomain)) // same domain
        .slice(0, 3); // limit pages

    let combinedHTML = baseHTML;

    // Visit additional pages
    for (const link of filteredLinks) {
        try {
            await page.goto(link, { waitUntil: "domcontentloaded" });

            const html = await page.content();

            combinedHTML += `\n\n<!-- PAGE: ${link} -->\n\n` + html;

        } catch (err) {
            console.log(`Failed to scrape ${link}`);
        }
    }

    await browser.close();

    return combinedHTML.substring(0, 15000); // increase limit slightly
}