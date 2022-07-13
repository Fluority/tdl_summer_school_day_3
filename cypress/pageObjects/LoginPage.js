import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get account() {
    return cy.get('#navbarAccount');
  }

  static get login() {
    return cy.get('#navbarLoginButton');
  }

  static get email() {
    return cy.get('#email');
  }

  static get password() {
    return cy.get('#password');
  }

  static get loginButton() {
    return cy.get('#loginButton');
  }
  
  static get accountVali() {
    return cy.get('button[aria-label="Go to user profile"]');
  }
}

export default LoginPage;
