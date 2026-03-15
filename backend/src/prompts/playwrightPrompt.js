export function buildPrompt(url, html, language) {

    return `
You are a senior QA automation engineer.

Analyze the provided website HTML and generate Playwright automation code
using the Page Object Model design pattern.

Website URL:
${url}

HTML Snapshot:
${html}

Language:
${language}

Requirements:

- Use Playwright with ${language}
- Follow Playwright best practices for ${language}
- Use async/await or the appropriate syntax for ${language}
- Use realistic selectors derived from the HTML
- Follow the Page Object Model architecture

Examples of possible page objects:

LoginPage
DashboardPage
NavigationPage
EmployeePage
AdminPage

Only generate page objects that make sense for the application.

Output Structure:

Generate multiple files including:

1. One or more Page Object classes
2. One or more Playwright test files

Each Page Object:
- Represents a UI page or component
- Contains reusable methods representing UI actions

Each test file:
- Imports the Page Objects
- Navigates to the application
- Executes realistic user flows
- Verifies successful outcomes

Output Format (VERY IMPORTANT):

filename
<code>

filename
<code>

Rules:

- Use correct ${language} syntax
- Include necessary imports
- Write clean maintainable automation code
- Return ONLY code
`;
}
