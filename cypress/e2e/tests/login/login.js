import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the SauceDemo login page", () => {
  cy.visit("/");
});

Given(
  "the user enters username {string} and password {string}",
  (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
  }
);

When("clicks on the login button", () => {
  cy.get("#login-button").click();
});

Then("the user should be redirected to the products page", () => {
  cy.url().should("include", "/inventory.html");
});

Then("the title of the products page should be {string}", (title) => {
  cy.get(".title").should("have.text", title);
});

Then(
  "an error message should be displayed with text {string}",
  (errorMessage) => {
    cy.get(".error-message-container").should("have.text", errorMessage);
  }
);
