import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");
  pageObjects.addOrRemoveTheProductToCart("Sauce Labs Backpack");
});

When("the user navigates to the cart", () => {
  pageObjects.clickTheShoppingCart();
});

Then("the cart should display the correct items", () => {
  cy.contains("Sauce Labs Backpack").should("be.visible");
});
