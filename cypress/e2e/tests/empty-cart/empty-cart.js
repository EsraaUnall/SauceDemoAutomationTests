import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");
  pageObjects.addOrRemoveTheProductToCart("Sauce Labs Backpack");
  pageObjects.addOrRemoveTheProductToCart("Sauce Labs Bike Light");
  pageObjects.clickTheShoppingCart();
});

When("the user removes all items from the cart", () => {
  pageObjects.removeAllItemsFromCart();
});

Then("the cart badge should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});
