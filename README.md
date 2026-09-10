# Playwright with TypeScript

UI and API test automation framework built with **TypeScript, Playwright, Cucumber and Allure**.

The project demonstrates a BDD-oriented approach to automated testing, using the Page Object Model for UI tests and Playwright's API testing capabilities for backend validation.

## Tech Stack

* **TypeScript**
* **Playwright**
* **Cucumber**
* **ts-node**
* **Allure Report**
* **Node.js**
* **Docker**
* **GitHub Actions**

## Project Structure

```text
playwright-with-typescript/
│
├── pages/
│   ├── base-page.ts
│   ├── login-page.ts
│   └── product-page.ts
│
├── tests/
│   ├── features/
│   │   ├── login.feature
│   │   ├── products.feature
│   │   └── environment.ts
│   │
│   └── steps/
│       ├── login_steps.ts
│       └── product_steps.ts
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Install the Playwright browsers if they are not already available:

```bash
npx playwright install
```

## Environment Variables

Create a `.env` file in the project root with the credentials required by the tests.

Example:

```env
EMAIL=your_email
PASSWORD=your_password
URL=https://www.saucedemo.com/
```

Do not commit `.env` to the repository.

## Running the Tests

Run the complete test suite:

```bash
npm test
```

Run Cucumber directly:

```bash
npx cucumber-js
```

## Allure Reports

The framework generates Allure test results during execution.

Generate the report:

```bash
npm run allure:generate
```

Open the report:

```bash
npm run allure:open
```

If your project uses a different Allure command configuration, use the scripts defined in `package.json`.

## Docker

The project includes a Dockerfile based on the official Playwright image.

Build the Docker image:

```bash
docker build -t playwright-typescript .
```

Run the tests inside the container:

```bash
docker run --rm playwright-typescript
```

Environment variables can be passed at runtime:

```bash
docker run --rm \
  -e EMAIL=your_email \
  -e PASSWORD=your_password \
  playwright-typescript
```

## Test Coverage

The project currently includes examples of:

* UI test automation
* API test automation
* Page Object Model
* BDD with Cucumber
* TypeScript type safety
* Playwright assertions
* Environment-based configuration
* Screenshots attached to Allure reports
* Dockerized test execution
* CI-ready test execution

## Why TypeScript?

This project is a migration of an existing Python/Behave/Playwright automation framework to TypeScript.

The migration demonstrates the differences between synchronous Python Playwright code and asynchronous TypeScript/JavaScript Playwright code, while preserving the same BDD and Page Object Model concepts.

## Future Improvements

Potential improvements include:

* Parallel test execution
* Better API client abstraction
* Test data management
* Multiple environment configuration
* Retry strategy for CI
* GitHub Actions test matrix
* Improved Allure reporting
* Additional API and UI scenarios

## Author

**Ernesto Sennhauser**

QA Automation Engineer focused on test automation, backend testing and software development.
