Feature: View Cart

  Scenario: View items in the cart
    Given the user is logged in and has items in the cart
    When the user navigates to the cart
    Then the cart should display the correct items
