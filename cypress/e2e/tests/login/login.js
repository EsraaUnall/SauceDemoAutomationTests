import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageObjects } from "../../page-objects/page-objects";
import { AssertionObjects } from "../../assertion-objects/assertion-objects";

const pageObjects = new PageObjects();
const assertionObject = new AssertionObjects();

Given("the user is on the SauceDemo login page", () => {
  cy.visit("/");
});

Given(
  "the user enters username {string} and password {string}",
  (username, password) => {
    pageObjects.fillUsername(username).fillPassword(password);
  }
);

When("clicks on the login button", () => {
  pageObjects.clickLoginButton();
});

Then("the user should be redirected to the products page", () => {
  assertionObject.verifyUrlContains("/inventory.html");
});

Then("the title of the products page should be {string}", (title) => {
  assertionObject.verifyPageTitle(title);
});

Then(
  "an error message should be displayed with text {string}",
  (errorMessage) => {
    assertionObject.verifyErrorMessage(errorMessage);
  }
);
