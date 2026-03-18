export function buildPrompt(url, html, automationTool, language, testType) {

    let testInstructions = "";

    // 🔥 Determine test architecture style
    const useFixtures =
        automationTool.toLowerCase().includes("playwright") &&
        (language.toLowerCase().includes("typescript") || language.toLowerCase().includes("javascript"));

    const useBaseTest = !useFixtures;

    if (testType === "UI Tests") {
        testInstructions = `
UI TEST REQUIREMENTS:

- Generate UI automation using the Page Object Model design pattern
- Create reusable Page Object classes
- Use realistic selectors derived from the HTML
- Represent user workflows such as login, navigation, and form interactions
- Follow ${automationTool} best practices for UI automation

TEST ARCHITECTURE:

${useFixtures ? `
- Use Playwright fixture-based architecture (test.extend)
- Define reusable fixtures for setup (e.g., page, context, authenticated user)
- Use beforeEach / test hooks where appropriate
- Avoid BaseTest classes
` : `
- Generate a BaseTest class to handle setup and teardown
- Use inheritance so test classes extend BaseTest
- Centralize browser/session initialization in BaseTest
`}

Examples of possible page objects:

LoginPage
DashboardPage
NavigationPage
EmployeePage
AdminPage

Only generate page objects that make sense for the application.

Each Page Object:
- Represents a UI page or component
- Contains reusable methods representing UI actions

Each test file:
- Imports the Page Objects
- Navigates to the application
- Executes realistic user flows
- Verifies successful outcomes
`;
    }

    if (testType === "API Tests") {
        testInstructions = `
API TEST REQUIREMENTS:

- Generate API tests targeting realistic endpoints for the application
- Assume typical endpoints such as:

/api/login
/api/users
/api/admin
/api/auth

TEST ARCHITECTURE:

${useFixtures ? `
- Use lightweight reusable request setup (fixtures or helper functions)
- Avoid BaseTest classes
- Use shared request context setup where applicable
` : `
- Generate a BaseTest API class for setup and teardown
- Use inheritance so test classes extend BaseTest
- Centralize HTTP client configuration
`}

- Use ${automationTool} capabilities for API testing if available
- If ${automationTool} does not support API testing directly, generate appropriate API test code for ${language}

Each API test file should:

- Send HTTP requests
- Validate response status codes
- Validate response bodies
- Include positive and negative test scenarios
`;
    }

    if (testType === "Performance Tests") {
        testInstructions = `
PERFORMANCE TEST REQUIREMENTS:

Generate THREE types of performance tests:

1. Smoke Test
2. Load Test
3. Spike Test

Smoke Test:
- Simulates a very small number of users
- Example: 1–5 virtual users

Load Test:
- Simulates expected production traffic
- Example: 50–200 virtual users

Spike Test:
- Simulates sudden bursts of traffic
- Example: jump from 10 users to 500 users quickly

- Prefer tools like k6 for implementation
- Use configurable parameters for VUs and duration

Each test should:

- Send HTTP requests to realistic endpoints
- Validate response time and status codes
- Be structured for easy execution and modification

Generate separate files:

smokeTest.js
loadTest.js
spikeTest.js
`;
    }

    return `
You are a senior QA automation engineer.

Analyze the provided website HTML and generate ${automationTool} automation code.

Website URL:
${url}

HTML Snapshot:
${html}

Language:
${language}

Test Type:
${testType}

Requirements:

- Use ${automationTool} with ${language}
- Follow ${automationTool} best practices for ${language}
- Use async/await or appropriate syntax for ${language}
- Write clean, maintainable, production-quality automation code

${testInstructions}

Output Structure:

Generate multiple files including:

1. Page Object classes or utilities
2. Test files
${useBaseTest ? "3. BaseTest class (if applicable)" : ""}

Output Format (VERY IMPORTANT):

Return the generated files as JSON:

{
 "files":[
  {
   "filename":"exampleFile.js",
   "code":"..."
  }
 ]
}

Rules:

- Use correct ${language} syntax
- Include necessary imports
- Ensure consistency between files
- Ensure file names match contents
- Do NOT nest files in folders
- Do NOT include markdown or explanations

Return JSON only.
`;
}