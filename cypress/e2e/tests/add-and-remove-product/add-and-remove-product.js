import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";
import { AssertionObjects } from "../../assertion-objects/assertion-objects";

const pageObjects = new PageObjects();
const assertionObject = new AssertionObjects();

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When(
  "the user adds {string} and {string} to the cart",
  (product1, product2) => {
    pageObjects.addOrRemoveTheProductToCart(product1);
    pageObjects.addOrRemoveTheProductToCart(product2);
  }
);

When("removes {string} from the cart", (product) => {
  pageObjects.addOrRemoveTheProductToCart(product);
});

Then("the cart should contain only {string}", (product) => {
  pageObjects.clickTheShoppingCart();
  assertionObject.verifyCartContainsProduct(product).verifyCartDoesNotContainProduct("Sauce Labs Backpack");
});
