import { PageObjects } from "../page-objects/page-objects";

export class AssertionObjects {
  pageObjects = new PageObjects();

  verifyCartContainsProduct(product) {
    this.pageObjects.getCartItems().should("contain.text", product);
    return this;
  }

  verifyCartDoesNotContainProduct(product) {
    this.pageObjects.getCartItems().should("not.contain.text", product);
    return this;
  }

  verifyCartItemCount(count) {
    this.pageObjects.getTheProductCount().should("contain.text", count);
    return this;
  }

  verifyConfirmationMessage(confirmationMessage) {
    this.pageObjects
      .getTheConfirmationMassage()
      .should("contain.text", confirmationMessage);
    return this;
  }

  verifyCartBadgeDoesNotExist() {
    this.pageObjects.getTheProductCount().should("not.exist");
    return this;
  }

  verifyErrorMessage(errorMessage) {
    this.pageObjects.getErrorMessage().should("have.text", errorMessage);
    return this;
  }

  verifyPageTitle(title) {
    this.pageObjects.getMainPageTitle().should("have.text", title);
    return this;
  }

  verifyUrlContains(path) {
    cy.url().should("include", path);
    return this;
  }

  VerifyLoginPage() {
    this.pageObjects.getLoginButton().should("be.visible");
    return this;
  }

  veriifyProductsSortedByNameAsc() {
    this.pageObjects.getInventoryItemNames().then((items) => {
      const names = [...items].map((item) => item.innerText);
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
    return this;
  }

  verifyProductsSortedByNameDesc() {
    this.pageObjects.getInventoryItemNames().then((items) => {
      const names = [...items].map((item) => item.innerText);
      const sortedNames = [...names].sort((a, b) => b.localeCompare(a)); // Z to A
      expect(names).to.deep.equal(sortedNames);
    });
    return this;
  }

  verifyProductsSortedByPriceAsc() {
    this.pageObjects.getInventoryItemPrices().then((prices) => {
      const priceValues = [...prices].map((price) =>
        parseFloat(price.innerText.replace("$", ""))
      );
      const sortedPrices = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
    return this;
  }

  verifyProductsSortedByPriceDesc() {
    this.pageObjects.getInventoryItemPrices().then((prices) => {
      const priceValues = [...prices].map((price) =>
        parseFloat(price.innerText.replace("$", ""))
      );
      const sortedPrices = [...priceValues].sort((a, b) => b - a);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
    return this;
  }

  verifyPricesFormat() {
    this.pageObjects.getInventoryItemPrices().each(($price) => {
      expect($price.text()).to.match(/^\$\d+(\.\d{2})?$/);
    });
    return this;
  }
}
