class registrationPage {
    get emailInput() { return cy.get('#input-email') };    
    get passwordInput() { return cy.get('#input-password') };    
    get loginButton() { return cy.get('[value="Login"]') }; 
}

export default new registrationPage;