export function buildPrompt(url, html, automationTool, language, testType) {

    let testInstructions = "";

    if (testType === "UI Tests") {
        testInstructions = `
UI TEST REQUIREMENTS:

- Generate UI automation using the Page Object Model design pattern
- Create reusable Page Object classes
- Use realistic selectors derived from the HTML
- Represent user workflows such as login, navigation, and form interactions
- Follow ${automationTool} best practices for UI automation

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

These tests should simulate different traffic patterns to validate system performance.

Smoke Test:
- Simulates a very small number of users
- Confirms the application responds correctly under light traffic
- Verifies basic endpoint availability
- Example: 1–5 virtual users

Load Test:
- Simulates expected production traffic
- Sustains multiple concurrent users over time
- Measures response time and stability
- Example: 50–200 virtual users depending on scenario

Spike Test:
- Simulates sudden large bursts of traffic
- Rapidly increases user load
- Tests system resilience and recovery
- Example: jump from 10 users to 500 users quickly

If possible, generate scripts compatible with common performance testing tools such as:

- k6
- HTTP request simulation

Performance tests should:

- Send repeated HTTP requests to realistic application endpoints
- Simulate concurrent users
- Validate response time and HTTP status codes
- Use clear configuration variables for user load and duration

Generate separate files for each performance test type, such as:

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
- Write clean maintainable automation code

${testInstructions}

Output Structure:

Generate multiple files including:

1. One or more automation classes or utilities
2. One or more test files

Output Format (VERY IMPORTANT):

Return the generated files as JSON in the following format:

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
- Write clean maintainable automation code
- Ensure filenames match the code contents

Do not include markdown or explanations.
Return JSON only.
`;
}