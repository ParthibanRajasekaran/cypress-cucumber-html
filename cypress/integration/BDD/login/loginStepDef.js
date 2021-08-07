/// <reference types="Cypress" />
import LoginPage from '../../../pageObjects/LoginPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"
import LandingPage from '../../../pageObjects/LandingPage'

const loginPage = new LoginPage()
const landingPage = new LandingPage()


Given('I open Login Page',()=>
{
    cy.visit(Cypress.env('url'))
    landingPage.getFormAuthenticationLink.click()
    const pageheader = loginPage.getPageHeader.text()
    cy.log(pageheader)
}) 


When('I enter valid credentials',function ()
{

})

When('I enter valid credentials',function ()
{
    
})

When('I enter valid credentials',function ()
{
    
})