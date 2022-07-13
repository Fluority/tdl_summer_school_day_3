import BasePage from '../pageObjects/basePage'

class SearchPage extends BasePage {

  static get searchButton() {
    return cy.get('mat-icon[class="mat-icon notranslate mat-ripple mat-search_icon-search ng-tns-c254-1 material-icons mat-icon-no-color"]');
  }

  static get searchInput() {
    return cy.get('#mat-input-0');
  }

  static get itemLemon() {
    return cy.get('div[class="item-name"]').contains("Lemon Juice (500ml)");
  }
  static get descriptionLemon() {
    return cy.get('div').contains("Sour but full of vitamins.");
  }

  static get itemEggfruit() {
    return cy.get('div[class="item-name"]').contains("Eggfruit Juice (500ml)");
  }
  static get descriptionEggfruit() {
    return cy.get('div').contains("Now with even more exotic flavour.");
  }

  static get itemStrawberry() {
    return cy.get('div[class="item-name"]').contains("Strawberry Juice (500ml)");
  }
  static get descriptionStrawberry() {
    return cy.get('div').contains("Sweet & tasty!");
  }

  static get closeButton() {
    return cy.get('button[aria-label="Close Dialog"]');
  }

  static get itemKing() {
    return cy.get('div[class="item-name"]').contains('OWASP Juice Shop "King of the Hill" Facemask');
  }

  static get reviewOpen() {
    return cy.get('mat-expansion-panel[aria-label="Expand for Reviews"]');
  }

  static get reviewVali() {
    return cy.get('div[class="mat-tooltip-trigger review-text"]');
  }

  static get itemRaspberry() {
    return cy.get('div[class="item-name"]').contains("Raspberry Juice (1000ml)");
  }

  static get reviewWrite() {
    return cy.get('textarea[aria-label="Text field to review a product"]');
  }

  static get submitButton() {
    return cy.get('button[type="submit"]');
  }
}

export default SearchPage;