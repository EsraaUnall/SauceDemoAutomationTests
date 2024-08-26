Feature: Checkout

  Scenario: Complete a purchase
    Given the user is logged in and has items in the cart
    When the user proceeds to checkout
    And enters shipping information "John Doe", "123 Main St", "10001"
    And completes the purchase
    Then the user should see a confirmation message "Thank you for your order!"
