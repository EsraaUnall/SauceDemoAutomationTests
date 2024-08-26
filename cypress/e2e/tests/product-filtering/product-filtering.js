import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";

const pageObjects = new PageObjects();

//Filter products by name A to Z
Given("the user is logged in and on the products page", () => {
  cy.login("standard_user", "secret_sauce");
  cy.url().should("include", "/inventory.html");
});

When("the user selects {string} from the filter dropdown", (filterOption) => {
  pageObjects.sortProductsBy(filterOption);
});

Then("the products should be listed in alphabetical order from A to Z", () => {
  pageObjects.verifyProductsSortedByNameAsc();
});

//Filter products by name Z to A
Then("the products should be listed in alphabetical order from Z to A", () => {
  pageObjects.verifyProductsSortedByNameDesc();
});

//Filter products by price low to high
Then("the products should be listed by price in ascending order", () => {
  pageObjects.verifyProductsSortedByPriceAsc();
});

//Filter products by price high to low
Then("the products should be listed by price in descending order", () => {
  pageObjects.verifyProductsSortedByPriceDesc();
});
