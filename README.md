# TestForge AI

AI-powered automation test generator.

TestForge AI analyzes a webpage and automatically generates Playwright automation tests using Large Language Models.

This project demonstrates how AI can accelerate QA automation by generating runnable test scripts directly from a URL.

This project explores how AI can assist SDETs by automatically generating automation tests from real web applications.

---

# Demo

User enters a URL:

https://opensource-demo.orangehrmlive.com

TestForge AI:

1. Loads the webpage using Playwright
2. Extracts the DOM
3. Sends the page content to an LLM
4. Generates a Playwright automation test
5. Saves the generated test to disk

Example output:

```
import { test, expect } from '@playwright/test'

test('login test', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com')

  await page.fill('input[name="username"]', 'Admin')

  await page.fill('input[name="password"]', 'admin123')

  await page.click('button[type="submit"]')

  await expect(page.locator('h6')).toHaveText('Dashboard')

})
```

---

# Tech Stack

Frontend

* React
* Vite
* Axios

Backend

* Node.js
* Express
* Playwright
* OpenAI API

---

# Architecture

```
React Frontend
      ↓
Express API
      ↓
Playwright Scraper
      ↓
OpenAI API
      ↓
Generated Playwright Test
```

---

# Project Structure

```
testforge-ai
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   └── prompts
│   │
│   └── generated-tests
│
├── frontend
│   ├── src
│   │   ├── components
│   │   └── services
│   │
│   └── index.html
│
├── .gitignore
└── README.md
```

---

# Running the Application

Backend

```
cd backend
npm install
npm run dev
```

Frontend

```
cd frontend
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

# Future Improvements

TestForge AI will evolve into an AI-powered QA automation platform capable of:

* Generating Page Objects
* Generating API tests
* Generating performance tests (k6)
* Generating full automation frameworks
* Fixing failed locators automatically

---

# Why This Project Exists

Automation engineers spend a significant amount of time writing repetitive test code.

TestForge AI explores how Large Language Models can accelerate this process by automatically generating test scripts from a webpage.

---

# Author

Automation Engineer specializing in:

* Test Automation Frameworks
* Playwright
* API Testing
* Performance Testing
* AI-assisted developer tooling
