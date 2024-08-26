import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");
  cy.get(`div.inventory_item_name:contains("Sauce Labs Backpack")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click();
  cy.get('#shopping_cart_container').click();
});

When("the user navigates to the cart", () => {
  cy.get(".shopping_cart_link").click();
});

Then("the cart should display the correct items", () => {
  cy.contains("Sauce Labs Backpack").should("be.visible");
});
