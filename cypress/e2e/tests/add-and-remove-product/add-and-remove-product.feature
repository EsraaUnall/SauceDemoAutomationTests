Feature: Add and Remove Products

  Scenario: Add multiple products to the cart and remove one
    Given the user is logged in and on the products page
    When the user adds "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart
    And removes "Sauce Labs Backpack" from the cart
    Then the cart should contain only "Sauce Labs Bike Light"
