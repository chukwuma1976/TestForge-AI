export function buildPrompt(url, html) {

    return `
You are a senior QA automation engineer.

Generate a Playwright test for the website below.

URL:
${url}

HTML:
${html}

Rules:

- Use Playwright JavaScript
- Use async/await
- Include imports
- Use realistic selectors
- Verify successful login or dashboard
- Return ONLY the test code
`;
}