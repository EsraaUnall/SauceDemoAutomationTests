Feature: Login to SauceDemo

  Scenario: Successful login with valid credentials
    Given the user is on the SauceDemo login page
    And the user enters username "standard_user" and password "secret_sauce"
    When clicks on the login button
    Then the user should be redirected to the products page
    Then the title of the products page should be "Products"

  Scenario: Login with invalid credentials
    Given the user is on the SauceDemo login page
    When the user enters username "invalid_user" and password "wrong_password"
    And clicks on the login button
    Then an error message should be displayed with text "Epic sadface: Username and password do not match any user in this service"
