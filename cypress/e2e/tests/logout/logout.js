import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

Given("the user is logged in", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("the user clicks on the logout button", () => {
  pageObjects.logout();
});

Then("the user should be redirected to the login page", () => {
  cy.url().should("include", "/");
});

Then("the user should see the login form", () => {
  cy.get("#login-button").should("be.visible");
});
