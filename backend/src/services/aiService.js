import OpenAI from "openai";
import dotenv from "dotenv";
import { buildPrompt } from "../prompts/playwrightPrompt.js";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function generatePlaywrightTest(url, html, language) {

    const prompt = buildPrompt(url, html, language);

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