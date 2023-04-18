class ProductListPage {
    getBreadCrumbs() {
        return cy.get("nav[data-testid='breadcrumbsTestId']");
    }

    getFilterSection() {
        return cy.get("div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-3>ul");
    }

    getProductListSection() {
        return cy.get("div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-9")
    }

    getRowsPerPageDropdown() {
        return cy.get('div[data-testid="paginationRowsPerPageMenu"] div').eq(0)
    }

    getRowsPerPageDropdownList() {
        return cy.get("ul.MuiList-root.MuiMenu-list.MuiList-padding li");
    }

    getShowOutOfStockCheckbox() {
        return cy.get("input[data-testid='filterCheckbox-Show Out of Stock']");
    }

    getSortByDropdown() {
        return cy.get("div[data-testid='menuSortBy']");
    }

    getSortByDropdownList() {
        return cy.get("ul[aria-labelledby='sort-label'] li");
    }

    getProductList() {
        return cy.get("div > div[data-testid='ProductCard']");
    }

    getOutOfStockProducts() {
        return cy.get("div[data-testid='Availability'] > h5[data-testid='stockMessage']").filter(':contains("OUT OF STOCK")');
    }

    filtersSet() {
        return cy.get("p[data-testid='clearFiltersButton']");
    }

    productPrice() {
        return cy.get("p[data-testid='priceLabel']");
    }
}

module.exports = new ProductListPage();
