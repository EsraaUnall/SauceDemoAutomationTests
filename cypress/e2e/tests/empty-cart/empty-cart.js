import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");
  // Add items to the cart
  cy.get(`div.inventory_item_name:contains("Sauce Labs Backpack")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click();
  cy.get(`div.inventory_item_name:contains("Sauce Labs Bike Light")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click(); 
  cy.get('#shopping_cart_container').click();
});

When("the user removes all items from the cart", () => {
  // Remove all items from the cart
  cy.get(".cart_item").each((item) => {
    cy.wrap(item).find(".cart_button").click(); // Assumes "Remove" button
  });
});

Then("the cart badge should be empty", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});
