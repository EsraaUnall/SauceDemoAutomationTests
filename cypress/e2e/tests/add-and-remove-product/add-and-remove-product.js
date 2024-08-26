import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("the user adds {string} and {string} to the cart", (product1, product2) => {
  cy.get(`div.inventory_item_name:contains("${product1}")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click();  

  cy.get(`div.inventory_item_name:contains("${product2}")`)
  .parents('div.inventory_item_description')
  .find('button')
  .click(); 
});

When("removes {string} from the cart", (product) => {
  cy.get(`div.inventory_item_name:contains("${product}")`)
  .parents('div.inventory_item_description')
  .find('button[data-test="remove-sauce-labs-backpack"]')
  .click(); 
});

Then("the cart should contain only {string}", (product) => {
  cy.get('#shopping_cart_container').click();
  cy.get(".cart_item").should("contain.text", product);
  cy.get(".cart_item").should("not.contain.text", "Sauce Labs Backpack"); // Assuming the removed item
});
