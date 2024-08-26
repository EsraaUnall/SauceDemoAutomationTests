import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AssertionObjects } from "../../assertion-objects/assertion-objects";

const assertionObjects = new AssertionObjects();

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  assertionObjects.verifyUrlContains("/inventory.html");
});

Then("the prices of all products should be displayed correctly", () => {
  assertionObjects.verifyPricesFormat();
});
