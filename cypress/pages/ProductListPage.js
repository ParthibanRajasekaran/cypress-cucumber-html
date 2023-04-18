class ProductDisplayPage {
    getCategoryPage() {
        return cy.get("selector for the category page");
    }

    getRowsPerPageDropdown() {
        return cy.get("selector for the rows per page dropdown");
    }

    getShowOutOfStockCheckbox() {
        return cy.get("selector for the show out of stock checkbox");
    }

    getSortByDropdown() {
        return cy.get("selector for the sort by dropdown");
    }

    getProductList() {
        return cy.get("div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-9 > div[data-testid='ProductCard']");
    }

    getOutOfStockProducts() {
        return cy.get("selector for out of stock products");
    }

    filtersSet(){
     return cy.get("p[data-testid='clearFiltersButton']")
    }
}

module.exports = new ProductDisplayPage();
