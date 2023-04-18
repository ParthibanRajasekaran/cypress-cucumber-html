/// <reference types="Cypress" />

const productListPage = require("../../pages/ProductListPage");

import {Given, Then, When,} from "@badeball/cypress-cucumber-preprocessor";

Given(/^the user is on the category page$/, () => {
    cy.visit(Cypress.env("task_url"));

    productListPage.getBreadCrumbs().should("be.visible");
    productListPage.getProductListSection().should("be.visible");
    productListPage.getFilterSection().should("be.visible");
});

When(/^no further options are clicked$/, () => {
    productListPage.filtersSet().should("not.exist");
});

Then(/^ten products should be displayed$/, () => {
    productListPage.getProductList().should("have.length", 10);
});


When(/^the user changes 'Rows per page:' to (\d+)$/, (rows) => {
    productListPage.getRowsPerPageDropdown().click();
    productListPage.getRowsPerPageDropdownList().contains(rows.toString()).click();
});


Then(/^(\d+) products should be displayed$/, (products) => {
    productListPage.getProductList().should("have.length", products);
});


When(/^the user clicks 'Show Out of Stock'$/, () => {
    productListPage.getShowOutOfStockCheckbox().check();
});

Then(/^check there is at least one product that shows 'OUT OF STOCK' in the results$/, () => {
    productListPage.getOutOfStockProducts()
        .its('length')
        .then((outOfStockCount) => {
            cy.log(`Number of OUT OF STOCK items: ${outOfStockCount}`);
        });
    productListPage.getOutOfStockProducts().should("have.length.greaterThan", 0);
});

When(/^the user selects 'Sort By:' - "(.+)"$/, (sortByOption) => {
    productListPage.getSortByDropdown().click({force: true});

    // Intercept the POST request
    cy.intercept({
        method: 'POST',
        url: 'https://api-v1.cromwell.co.uk/search',
    }).as('sortRequest');

    productListPage.getSortByDropdownList().contains(sortByOption.toString()).click({force: true});

    // Wait for the request to complete and check if the status code is 200
    cy.wait('@sortRequest').its('response.statusCode').should('eq', 200);
});

Then(/^10 products should be displayed in order of price \(low to high\)$/, () => {

// Replace the 'selector for product price' with the appropriate selector for your application
    productListPage.productPrice().then(($prices) => {
        // Extract the prices from the product list and convert them to numbers
        const prices = $prices.map((_, el) => {
            const price = parseFloat(el.innerText.replace(/[^0-9.]/g, ''));
            cy.log(`Product prices captured: ${price}`);
            return price;
        }).get();

        // Compare the original prices array with a sorted version of itself
        const isSortedLowToHigh = prices.slice().sort((a, b) => a - b).every((value, index) => value === prices[index]);

        // Check if the products are sorted and if there are 10 products in the list
        expect(isSortedLowToHigh).to.be.true;
        expect($prices).to.have.length(10);
    });
});


