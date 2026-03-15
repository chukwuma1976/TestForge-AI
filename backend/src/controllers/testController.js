import fs from "fs-extra";
import { scrapePage } from "../services/scraperService.js";
import { generatePlaywrightTest } from "../services/aiService.js";

export const generateTest = async (req, res) => {

    try {

        const { url, automationTool, language } = req.body;

        if (!url) {
            return res.status(400).json({ error: "URL required" });
        }

        console.log("Scraping page...");

        const html = await scrapePage(url);

        console.log("Generating AI test...");

        const testCode = await generatePlaywrightTest(url, html, automationTool, language);

        const filePath = `generated-tests/generated.spec`;

        await fs.outputFile(filePath, testCode);

        res.json({
            code: testCode
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Test generation failed"
        });

    }

};
