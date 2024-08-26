import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";
import { AssertionObjects } from "../../assertion-objects/assertion-objects";

const pageObjects = new PageObjects();
const assertionObject = new AssertionObjects();

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("the user adds {string} to the cart", (productName) => {
  pageObjects.addOrRemoveTheProductToCart(productName);
});

Then("the cart badge should show {string}", (count) => {
  pageObjects.clickTheShoppingCart();
  assertionObject.verifyCartItemCount(count);
});
