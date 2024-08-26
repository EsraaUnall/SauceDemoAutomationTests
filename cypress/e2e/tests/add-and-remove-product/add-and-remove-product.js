import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

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
  cy.get(".cart_item").should("contain.text", product);
  cy.get(".cart_item").should("not.contain.text", "Sauce Labs Backpack"); 
});
