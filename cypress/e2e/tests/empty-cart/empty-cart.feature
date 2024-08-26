Feature: Empty Cart

  Scenario: Remove all items from the cart
    Given the user is logged in and has items in the cart
    When the user removes all items from the cart
    Then the cart badge should be empty
