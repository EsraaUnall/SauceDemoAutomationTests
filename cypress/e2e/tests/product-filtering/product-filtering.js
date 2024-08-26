import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Filter products by name A to Z
Given("the user is logged in and on the products page", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });
  
  When("the user selects {string} from the filter dropdown", (filterOption) => {
    cy.get(".product_sort_container").select(filterOption);
  });
  
  Then("the products should be listed in alphabetical order from A to Z", () => {
    cy.get(".inventory_item_name").then((items) => {
      const names = [...items].map((item) => item.innerText);
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
  });

//Filter products by name Z to A
  Then("the products should be listed in alphabetical order from Z to A", () => {
    cy.get(".inventory_item_name").then((items) => {
      const names = [...items].map((item) => item.innerText);
      const sortedNames = [...names].sort((a, b) => b.localeCompare(a)); // Z to A
      expect(names).to.deep.equal(sortedNames);
    });
  });

//Filter products by price low to high
  Then("the products should be listed by price in ascending order", () => {
    cy.get(".inventory_item_price").then((prices) => {
      const priceValues = [...prices].map((price) => parseFloat(price.innerText.replace('$', '')));
      const sortedPrices = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
  });

//Filter products by price high to low
  Then("the products should be listed by price in descending order", () => {
    cy.get(".inventory_item_price").then((items) => {
      const prices = [...items].map((item) => parseFloat(item.innerText.replace('$', '')));
      const sortedPrices = [...prices].sort((a, b) => b - a); // High to Low
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
  