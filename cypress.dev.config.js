const baseConfig = require('./cypress.config');

module.exports = {
    ...baseConfig,
    env: {
        ...baseConfig.env,
        allureReuseAfterSpec: true,
        allure: true,
        url:"https://the-internet.herokuapp.com",
        environment:"dev",
        username:"tomsmith",
        password:"SuperSecretPassword!",
        emailId:"sample@test.com"
    }
};