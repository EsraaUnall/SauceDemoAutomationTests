import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in and has items in the cart", () => {
  cy.login("standard_user", "secret_sauce");

  cy.get(`div.inventory_item_name:contains("Sauce Labs Backpack")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click();

  cy.get('#shopping_cart_container').click();
});

When("the user proceeds to checkout", () => {
  cy.get(".checkout_button").click();
});

When("enters shipping information {string}, {string}, {string}", (firstName, lastName, zip) => {
  cy.get("#first-name").type(firstName);
  cy.get("#last-name").type(lastName);
  cy.get("#postal-code").type(zip);
  cy.get("#continue").click();
});

When("completes the purchase", () => {
  cy.get("#finish").click();
});

Then("the user should see a confirmation message {string}", (confirmationMessage) => {
  cy.get(".complete-header").should("contain.text", confirmationMessage);
});
