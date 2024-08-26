import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("the user adds {string} to the cart", (productName) => {
  pageObjects.addOrRemoveTheProductToCart(productName);
});

Then("the cart badge should show {string}", (count) => {
  pageObjects.clickTheShoppingCart();
  cy.get(".shopping_cart_badge").should("contain.text", count);
});
