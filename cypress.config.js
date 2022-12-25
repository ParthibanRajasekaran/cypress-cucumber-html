require("dotenv").config({ path: `.env${process.env.E2E_ENV}` });
// require("dotenv").config(); ## Enable this instead of the above line if you wish to read from the default .env file
const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'd1dmex',
  modifyObstructiveCode: true,
  e2e: {
    async setupNodeEvents(on, config) {
      config.env = config.env || {};

      // config.baseUrl = process.env.URL;
      config.env.url = process.env.URL;
      config.env.environment = process.env.ENVIRONMENT;
      config.env.username = process.env.USERNAME;
      config.env.password = process.env.PASSWORD;
      config.env.emailId = process.env.EMAIL_ID;

      allureWriter(on, config);

      console.log(`Tests are running on ${config.env.environment} environment`);

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      await registerReportPortalPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
      allure: true
    }
  },

  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'https://demo.reportportal.io/api/v1',
    token: 'ad694c45-d983-4df6-a6f0-2ba15ee4ccbf',
    launch: "cypress-cucumber-html",
    project: "parthibanrajasekaran_personal",
    description: "Test run for Cypress E2E",

    screenshotsFolder: "cypress/screenshots",
    fixturesFolder: "cypress/fixtures",

    screenshotOnRunFailure: true,
    skippedIssue: true,

    attributes: [
      {
        key: "test",
        value: "login"
      },
      {
        value: "herokuapp"
      }
    ]
  },
});
