import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("the user adds {string} to the cart", (productName) => {
  cy.get(`div.inventory_item_name:contains("${productName}")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click();
});

Then("the cart badge should show {string}", (count) => {
  cy.get('#shopping_cart_container').click(); 
  cy.get(".shopping_cart_badge").should("contain.text", count);
});
