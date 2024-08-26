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

  getCartItems(name) {
    return cy.get(`[data-test="remove-${name}"]`)
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

  getMainPageTitle() {
    return cy.get(".title");
  }

  getErrorMessage() {
    return cy.get(".error-message-container");
  }

  getUsernameField() {
    return cy.get("#user-name");
  }

  getPasswordField() {
    return cy.get("#password");
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

  removeAllItemsFromCart(name) {
    this.getCartItems(name).click();  
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

  clickLoginButton() {
    this.getLoginButton().click();
    return this;
  }

  fillUsername(username) {
    this.getUsernameField().type(username);
    return this;
  }

  fillPassword(password) {
    this.getPasswordField().type(password);
    return this;
  }
}
