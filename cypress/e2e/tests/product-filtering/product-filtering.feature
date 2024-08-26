Feature: Filter products

  Scenario: Filter products by name A to Z
    Given the user is logged in and on the products page
    When the user selects "Name (A to Z)" from the filter dropdown
    Then the products should be listed in alphabetical order from A to Z

  Scenario: Filter products by name Z to A
    Given the user is logged in and on the products page
    When the user selects "Name (Z to A)" from the filter dropdown
    Then the products should be listed in alphabetical order from Z to A

  Scenario: Filter products by price high to low
    Given the user is logged in and on the products page
    When the user selects "Price (high to low)" from the filter dropdown
    Then the products should be listed by price in descending order

  Scenario: Filter products by price low to high
    Given the user is logged in and on the products page
    When the user selects "Price (low to high)" from the filter dropdown
    Then the products should be listed by price in ascending order
