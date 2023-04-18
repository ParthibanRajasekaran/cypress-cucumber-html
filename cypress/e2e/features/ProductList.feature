Feature: Product List

  Background:
    Given the user is on the category page

  @display
  Scenario: Display 10 products by default
    When no further options are clicked
    Then ten products should be displayed

  @rows_per_page
  Scenario: Change 'Rows per page' to 25
    When the user changes 'Rows per page:' to 25
    Then 25 products should be displayed

  @out_of_stock
  Scenario: Show out of stock products
    When the user changes 'Rows per page:' to 50
    And the user clicks 'Show Out of Stock'
    Then check there is at least one product that shows 'OUT OF STOCK' in the results

  @sort_by_price
  Scenario: Sort products by price (low to high)
    When the user selects 'Sort By:' - "Price Low to High"
    Then 10 products should be displayed in order of price (low to high)