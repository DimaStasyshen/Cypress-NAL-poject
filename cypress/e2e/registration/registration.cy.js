import registrationPage from "../../fixtures/page_object/registration.page";
import { generateUserData } from "../../helpers/fakerData";
const registrationPageText = require("../../fixtures/test_data/dictionary/registration.json");
const accountPageText = require("../../fixtures/test_data/dictionary/account.json");

let userData = generateUserData();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/opencart/index.php?route=account/register");  
  });

  it("Should register new user", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.email);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.privacyPolicyCheckBox.click();
    registrationPage.continueButton.click();
    cy.contains(accountPageText.accountCreated).should("be.visible");
  });

  it("Should not be able to register with an existing email address", () => {
    registrationPage.firstNameInput.type(userData.firstName);
    registrationPage.lastNameInput.type(userData.lastName);
    registrationPage.emailInput.type(userData.existingEmail);
    registrationPage.telephoneInput.type(userData.phoneNumber);
    registrationPage.passwordInput.type(userData.password);
    registrationPage.passwordConfirmInput.type(userData.password);
    registrationPage.privacyPolicyCheckBox.click();
    registrationPage.continueButton.click();
    cy.contains(registrationPageText.emailAlreadyRegistered).should("be.visible");
    });
});