import loginPage from "../../fixtures/page_object/login.page";
import header from "../../fixtures/page_object/header";
const logoutPageText = require("../../fixtures/test_data/dictionary/logout.json");

const userEmail = Cypress.env("userEmail");
const userPassword = Cypress.env("userPassword");

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/index.php?route=account/login");  
  });

  it("Should login/logout", () => {
    loginPage.emailInput.type(userEmail);
    loginPage.passwordInput.type(userPassword);
    loginPage.loginButton.click();
    cy.url().should('include', 'index.php?route=account/account');
    header.myAccountButton.click();
    header.logoutButton.click();
    cy.contains(logoutPageText.logoutMessage).should("be.visible");
  });
});