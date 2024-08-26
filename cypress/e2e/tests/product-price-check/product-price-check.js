import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

Then("the prices of all products should be displayed correctly", () => {
  cy.get(".inventory_item_price").each(($price) => {
    expect($price.text()).to.match(/^\$\d+(\.\d{2})?$/); // Matches price format $x.xx
  });
});
