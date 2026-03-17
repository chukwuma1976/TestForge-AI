import OpenAI from "openai";
import dotenv from "dotenv";
import { buildPrompt } from "../prompts/playwrightPrompt.js";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function generatePlaywrightTest(url, html, automationTool, language, testType) {

    const prompt = buildPrompt(url, html, automationTool, language, testType);

    const response = await client.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    return response.choices[0].message.content;
}