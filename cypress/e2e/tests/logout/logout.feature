Feature: Logout

  Scenario: User logs out successfully
    Given the user is logged in
    When the user clicks on the logout button
    Then the user should be redirected to the login page
    And the user should see the login form
