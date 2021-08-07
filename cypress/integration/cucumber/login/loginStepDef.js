/// <reference types="Cypress" />

import LoginPage from '../../../pageObjects/LoginPage'
import LandingPage from '../../../pageObjects/LandingPage'

import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"

	const loginPage = new LoginPage()
	const landingPage = new LandingPage()

	Given(/^I open Login Page$/, ()=>
	{
		cy.visit(Cypress.env('url'))
		cy.log(Cypress.env('url'))
		console.log(Cypress.env('url'))
		landingPage.getFormAuthenticationLink().click()
		loginPage.getPageHeader().then(function(pageHeader)
		{
			cy.log(pageHeader.text())
		
		})
	}) 
	
	When(/^I enter valid credentials$/, () => {
		loginPage.getUserNameField().type(Cypress.env('username'))
		loginPage.getPasswordField().type(Cypress.env('password'))
	});
	
	When(/^Click on the login button$/, () => {
		loginPage.getLoginButton().click()
	});
	
	Then(/^User must be able to login$/, () => {
		cy.assertIfElementNotVisible('a > i')
	})
	
	When(/^I enter invalid {username} {password}$/, (datatable) => {
		datatable.hashes().forEach((element) => {
			loginPage.getUserNameField().type(element.username)
			loginPage.getPasswordField().type(element.password)
		})
	})
	
	Then(/^User must not be able to login$/, () => {
		loginPage.getLofinFailureError().should('be.visible')
		cy.log("Error message displayed as expected")
	})