/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes

cy.visit(Cypress.env('url')+"/AutomationPractice/")

cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
    cy.log(url)
   // cy.visit(url)
    //rahulshettyacademy.com/seleniumpractise


})
})


})




























