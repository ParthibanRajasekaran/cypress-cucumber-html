require("dotenv").config({path: `.env${process.env.E2E_ENV}`});
// require("dotenv").config(); ## Enable this instead of the above line if you wish to read from the default .env file
const {defineConfig} = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    projectId: 'd1dmex',
    modifyObstructiveCode: true,
    e2e: {
        async setupNodeEvents(on, config) {
            config.env = config.env || {};

            allureWriter(on, config);

            console.log(`Tests are running on ${config.env.environment} environment`);

            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);
            return config;
        },
        specPattern: "cypress/e2e/features/*.feature",
        supportFile: "cypress/support/e2e.js",
        chromeWebSecurity: false,
        env: {
            allureReuseAfterSpec: true,
            allure: true,

            environment: "default",

            task_url: "https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901?pageLimit=10"
        }
    }
});
