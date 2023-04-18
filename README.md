# Cromwell Technical Task: Cypress Framework for Testing Product List Page

This is a Cypress framework based on Cucumber written in JavaScript to perform automated tests on a product list page of Cromwell website. The tests cover the following scenarios:

1. Verify that 10 products are displayed on the page when no further options are clicked.
2. Verify that 25 products are displayed on the page when the user changes the 'Rows per page:' pagination to 25.
3. Verify that at least one product shows 'OUT OF STOCK' in the results when the user changes 'Rows per page' pagination to 25 and clicks 'Show Out of Stock'.
4. Verify that 10 products are displayed in order of price (low to high) when the user selects 'Sort By:' - 'Price Low to High'.

## Pre-requisite:

Minimum configuration for optimal usage:
[NPM](https://www.npmjs.com) - 8+
[Node](https://nodejs.org/en/download/) - 16+
[Cypress](https://github.com/cypress-io/cypress/releases) - 10+

**Note:**
- Node installation will automatically install NPM from the above link
- You can validate the version installed via

```bash 
npm --version
node --version
Cypress --version
```

**IDE Installation:** <br>
[Visual Studio code / VS code](https://code.visualstudio.com)
<br> or <br>
[WebStorm](https://www.jetbrains.com/webstorm/)


## Project Components

###  Feature Files
The feature files are defined under the ``cypress/e2e/features/`` directory.

### Step Definitions Files
The step_definition files are defined under the ``cypress/e2e/step_definitions/`` directory.

###  Page Objects
The page objects are defined under the ``cypress/pages/`` directory.


## Getting started:

- Select branch ``task/cromwell`` Clone: https://github.com/ParthibanRajasekaran/cypress-cucumber-html.git
- Open the project in your editor
- Open Terminal at bottom right corner and do the below:

```bash 
npm install --save-dev
```

To ensure Cypress installation type the below in your terminal:

```bash 
npx cypress open
```

Verify if the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) is launched

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test
execution

To run the tests via CLI on a headless mode

```bash 
npx cypress run
```

To run the tests via CLI with default env config (cypress-cucumber-html/cypress.config.js)

```bash 
npx cypress run
```

To run the tests via CLI with dev env configs (cypress-cucumber-html/cypress.dev.config.js)

```bash 
npx cypress run --config-file cypress.dev.config.js
```

To run the tests via CLI with qa env configs (cypress-cucumber-html/cypress.qa.config.js)

```bash 
npx cypress run --config-file cypress.qa.config.js
```

To run the tests via CLI with an env config

```bash 
npx cypress run --browser chrome --config-file cypress.dev.config.js
```

To run one particular tag

```bash 
npx cypress run --env TAGS="@display" --config-file cypress.dev.config.js
```

To run the tests with one particular tag but exclude another tag name via CLI

```bash 
npx cypress run --env TAGS="@rows_per_page and not @out_of_stock" --config-file cypress.dev.config.js
```

To run the tests with combination of tag names via CLI

```bash 
npx cypress run --env TAGS="@display and @sort_by_price" --config-file cypress.dev.config.js
```

## Implementing tests

- Create the XXX.feature file within **cypress / e2e / features** (*Eg. XYZ.feature*)
- Create scenarios within the feature file in gherkin format for your requirement
- Select the scenario create and right click on it and copy step definition to the clip board
- Within e2e/step_definitions, create a **StepDefinition class** with the same name as the feature file
- Paste the step definitions from the clipboard with blank step definitions
- Create pages and components class in **cypress / pages** and add only locators to it (
  Only [CSS selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors) can be used as locators)
- Create an object for the page class within the StepDefinition class and access the locators and add relevant actions
  and validations
- Add tag names to the features / scenario / scenario outlines to provide user with an option to group test execution

## Report Generation:

https://medium.com/@rajasekaran.parthiban7/how-to-integrate-allure-with-cypress-cucumber-framework-88102d89498f