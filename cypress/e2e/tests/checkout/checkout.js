import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");
  pageObjects.addOrRemoveTheProductToCart("Sauce Labs Backpack");
  pageObjects.clickTheShoppingCart();
});

When("the user proceeds to checkout", () => {
  pageObjects.clickCheckout();
});

When(
  "enters shipping information {string}, {string}, {string}",
  (firstName, lastName, zip) => {
    pageObjects
      .fillFirstName(firstName)
      .fillLastName(lastName)
      .fillPostalCode(zip)
      .clickContinue();
  }
);

When("completes the purchase", () => {
  pageObjects.clickFinish();
});

Then(
  "the user should see a confirmation message {string}",
  (confirmationMessage) => {
    cy.get(".complete-header").should("contain.text", confirmationMessage);
  }
);
