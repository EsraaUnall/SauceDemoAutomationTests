import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";
import { AssertionObjects } from "../../assertion-objects/assertion-objects";

const pageObjects = new PageObjects();
const assertionObject = new AssertionObjects();

Given("the user is logged in", () => {
  cy.login("standard_user", "secret_sauce");
  assertionObject.verifyUrlContains("/inventory.html");
});

When("the user clicks on the logout button", () => {
  pageObjects.logout();
});

Then("the user should be redirected to the login page", () => {
  assertionObject.verifyUrlContains("/");
});

Then("the user should see the login form", () => {
  assertionObject.VerifyLoginPage();
});
