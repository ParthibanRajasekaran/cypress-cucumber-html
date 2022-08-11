class LoginPage {
  getPageHeader() {
    return cy.get("h2");
  }

  getPageDescription() {
    return cy.get("h4");
  }

  getUserNameField() {
    return cy.get("#username");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("button.radius");
  }

  getLofinFailureError() {
    return cy.get("#flash");
  }
}

module.exports = new LoginPage();
