export class PageObjects {
  getTheProductToCart(name) {
    return cy
      .get(`div.inventory_item_name:contains("${name}")`)
      .parents("div.inventory_item_description")
      .find("button");
  }

  getTheShoppingCart() {
    return cy.get("#shopping_cart_container");
  }

  getTheProductCount() {
    return cy.get(".shopping_cart_badge");
  }

  getFirstNameField() {
    return cy.get("#first-name");
  }

  getLastNameField() {
    return cy.get("#last-name");
  }

  getPostalCodeField() {
    return cy.get("#postal-code");
  }

  getContinueButton() {
    return cy.get("#continue");
  }

  getCheckoutButton() {
    return cy.get(".checkout_button");
  }

  getFinishButton() {
    return cy.get("#finish");
  }

  getTheConfirmationMassage() {
    return cy.get(".complete-header");
  }

  getCartItems() {
    return cy.get(".cart_item");
  }

  getMenuButton() {
    return cy.get("#react-burger-menu-btn");
  }

  getLogoutButton() {
    return cy.get("#logout_sidebar_link");
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  getSortContainer() {
    return cy.get(".product_sort_container");
  }

  getInventoryItemNames() {
    return cy.get(".inventory_item_name");
  }

  getInventoryItemPrices() {
    return cy.get(".inventory_item_price");
  }

  addOrRemoveTheProductToCart(name) {
    this.getTheProductToCart(name).click();
    return this;
  }

  clickTheShoppingCart() {
    this.getTheShoppingCart().click();
    return this;
  }

  fillFirstName(firstName) {
    this.getFirstNameField().type(firstName);
    return this;
  }

  fillLastName(lastName) {
    this.getLastNameField().type(lastName);
    return this;
  }

  fillPostalCode(zip) {
    this.getPostalCodeField().type(zip);
    return this;
  }

  clickContinue() {
    this.getContinueButton().click();
    return this;
  }

  clickCheckout() {
    this.getCheckoutButton().click();
    return this;
  }

  clickFinish() {
    this.getFinishButton().click();
    return this;
  }

  removeAllItemsFromCart() {
    this.getCartItems().each((item) => {
      cy.wrap(item).find(".cart_button").click();
    });
    return this;
  }

  openMenu() {
    this.getMenuButton().click();
    return this;
  }

  logout() {
    this.openMenu();
    this.getLogoutButton().click();
    return this;
  }

  sortProductsBy(filterOption) {
    this.getSortContainer().select(filterOption);
    return this;
  }

  verifyProductsSortedByNameAsc() {
    this.getInventoryItemNames().then((items) => {
      const names = [...items].map((item) => item.innerText);
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
    return this;
  }

  verifyProductsSortedByNameDesc() {
    this.getInventoryItemNames().then((items) => {
      const names = [...items].map((item) => item.innerText);
      const sortedNames = [...names].sort((a, b) => b.localeCompare(a)); // Z to A
      expect(names).to.deep.equal(sortedNames);
    });
    return this;
  }

  verifyProductsSortedByPriceAsc() {
    this.getInventoryItemPrices().then((prices) => {
      const priceValues = [...prices].map((price) =>
        parseFloat(price.innerText.replace("$", ""))
      );
      const sortedPrices = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
    return this;
  }

  verifyProductsSortedByPriceDesc() {
    this.getInventoryItemPrices().then((prices) => {
      const priceValues = [...prices].map((price) =>
        parseFloat(price.innerText.replace("$", ""))
      );
      const sortedPrices = [...priceValues].sort((a, b) => b - a);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
    return this;
  }

  verifyPricesFormat() {
    this.getInventoryItemPrices().each(($price) => {
      expect($price.text()).to.match(/^\$\d+(\.\d{2})?$/);
    });
    return this;
  }
}
