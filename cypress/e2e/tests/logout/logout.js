import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in", () => {
  cy.login("standard_user", "secret_sauce"); 
  cy.url().should("include", "/inventory.html");
});

When("the user clicks on the logout button", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

Then("the user should be redirected to the login page", () => {
  cy.url().should("include", "/");
});

Then("the user should see the login form", () => {
  cy.get("#login-button").should("be.visible");
});
