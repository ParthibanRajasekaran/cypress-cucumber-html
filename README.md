# cypress-cucumber-html

[![cypress-cucumber-html](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/d1dmex&style=flat&logo=cypress)](https://cloud.cypress.io/projects/d1dmex/runs)

Official documentation: [Cypress](https://docs.cypress.io)
To know about recent Cypress feature click [here](https://www.cypress.io/features/)

## Pre-requisite:

Minimum configuration for optimal usage:
[NPM](https://www.npmjs.com) -  8+
[Node](https://nodejs.org/en/download/) - 16+
[Cypress](https://github.com/cypress-io/cypress/releases) - 10+

Note: 
- Node installation will automatically install NPM from the above link
- You can validate the version installed via
```bash 
npm --version
node --version
Cypress --version
```

**IDE Installation:** [Visual Studio code / VS code](https://code.visualstudio.com)
Extensions suggested for optimal Cypress usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code
Extensions for icon theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

## Getting started:

Clone: https://github.com/vwdfive/cypress-cucumber
Open the project in your editor
Open Terminal at bottom right corner and do the below:
```bash 
npm install --save-dev
```
To ensure Cypress installation type the below in your terminal:
```bash 
npx cypress open
```
Verify if the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) is launched

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test execution

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
npx cypress run --env TAGS="@invalid" --config-file cypress.dev.config.js
```

To run the tests with one particular tag but exclude another tag name via CLI
```bash 
npx cypress run --env TAGS="@login and not @invalid" --config-file cypress.dev.config.js
```

To run the tests with combination of tag names via CLI
```bash 
npx cypress run --env TAGS="@login and @invalid" --config-file cypress.dev.config.js
```


## Implementing tests

- Create the XXX.feature file within **cypress / e2e / features** (*Eg. XYZ.feature*)
- Create scenarios within the feature file in gherkin format for your requirement 
- Select the scenario create and right click on it and copy step definition to the clip board
- Within e2e/step_definitions, create a **StepDefinition class** with the same name as the feature file
- Paste the step definitions from the clipboard with blank step definitions
- Create pages and components class in **cypress / pages** and add only locators to it (Only [CSS selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors) can be used as locators)
- Create an object for the page class within the StepDefinition class and access the locators and add relevant actions and validations 
- Add tag names to the features / scenario / scenario outlines to provide user with an option to group test execution

## Bonus
[Cypress Cheat Sheet](https://chercher.tech/cypress-io/cheat-sheet-cypress-io)

## IDE sponsorship offered by
<a href="https://jb.gg/OpenSourceSupport">
<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo." style="width:150px;" />  </a>
