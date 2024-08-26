Feature: Add to Cart

  Scenario: Add a product to the cart
    Given the user is logged in and on the products page
    When the user adds "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"
