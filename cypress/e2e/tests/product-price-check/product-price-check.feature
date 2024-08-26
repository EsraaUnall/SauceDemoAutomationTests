Feature: Product Price Check

  Scenario: Verify product prices on the products page
    Given the user is logged in and on the products page
    Then the prices of all products should be displayed correctly
