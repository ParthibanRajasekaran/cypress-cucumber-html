// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand()

Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })
})

Cypress.Commands.add('assertIfElementNotVisible', locator => {
    cy.get(locator).should('be.visible')
})

const encryption = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0))
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2)
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code)
  
    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("")
  }
  
  const decryption = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0))
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code)
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("")
  }
  
  
  encrypt(plaintext)
  {
      return crypt("salt", toBeEncrypted)
  }
  
  encrypt(encryptedtext)
  {
      return crypt("salt", toBeEncrypted)
  }

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
