require("dotenv").config({ path: `.env${process.env.E2E_ENV}` });
// require("dotenv").config();
const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const registerReportPortalPlugin = require("@reportportal/agent-js-cypress/lib/plugin");

module.exports = defineConfig({
  modifyObstructiveCode: true,
  e2e: {
    async setupNodeEvents(on, config) {
      config.baseUrl = process.env.URL;
      config.env.url = process.env.URL;
      config.env.environment = process.env.ENVIRONMENT;
      config.env.username = process.env.USERNAME;
      config.env.password = process.env.PASSWORD;
      config.env.emailId = process.env.EMAIL_ID;

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
  },
});
