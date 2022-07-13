import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get account() {
    return cy.get('#navbarAccount');
  }

  static get login() {
    return cy.get('#navbarLoginButton');
  }

  static get customer() {
    return cy.get('a[routerlink="/register"]');
  }

  static get emailControl() {
    return cy.get('#emailControl');
  }

  static get passwordControl() {
    return cy.get('#passwordControl');
  }

  static get repeatPasswordControl() {
    return cy.get('#repeatPasswordControl');
  }

  static get security() {
    return cy.get('mat-select[aria-label="Selection list for the security question"]');
  }

  static get question() {
    return cy.get('span[class="mat-option-text"]').contains("Name of your favorite pet?");
  }

  static get answer() {
    return cy.get('#securityAnswerControl');
  }

  static get register() {
    return cy.get('#registerButton');
  }
}

export default RegistrationPage;
