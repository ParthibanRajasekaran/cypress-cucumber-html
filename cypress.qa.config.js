const baseConfig = require('./cypress.config');

module.exports = {
    ...baseConfig,
    env: {
        ...baseConfig.env,
        allureReuseAfterSpec: true,
        allure: true,

        environment: "qa",

        task_url: "https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901?pageLimit=10"
    }
};