/// <reference types="Cypress" />

const loginPage = require("../../pages/LoginPage");
const landingPage = require("../../pages/LandingPage");

import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I open Login Page$/, () => {
  cy.log(typeof Cypress.env("url"));
  cy.log(Cypress.env("url"));
  console.log(Cypress.env("url"));
  cy.visit(Cypress.env("url"));

  landingPage.getFormAuthenticationLink().click();
  loginPage.getPageHeader().then(function (pageHeader) {
    cy.log(pageHeader.text());
  });
});

When(/^I enter valid credentials$/, () => {
  loginPage.getUserNameField().type(Cypress.env("username"));
  loginPage.getPasswordField().type(Cypress.env("password"));
  loginPage.getLoginButton().click();
});

Then(/^User must be able to login$/, () => {
  cy.assertIfElementNotVisible("a > i");
});

When(/^I enter invalid "([^"]*)" "([^"]*)"$/, (username, password) => {
  loginPage.getUserNameField().type(username);
  loginPage.getPasswordField().type(password, { log: false });
  loginPage.getLoginButton().click();
});

Then(/^User must not be able to login$/, () => {
  loginPage.getLofinFailureError().should("be.visible");
  cy.log("Error message displayed as expected");
});
