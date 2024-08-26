import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";
import { AssertionObjects } from "../../assertion-objects/assertion-objects";

const pageObjects = new PageObjects();
const assertionObject = new AssertionObjects();

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");
  pageObjects.addOrRemoveTheProductToCart("Sauce Labs Backpack");
});

When("the user navigates to the cart", () => {
  pageObjects.clickTheShoppingCart();
});

Then("the cart should display the correct items as {string}", (name) => {
  assertionObject.verifyCartContainsProduct(name);
});
