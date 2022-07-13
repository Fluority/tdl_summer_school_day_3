import BasePage from '../pageObjects/basePage'

class ProductsPage extends BasePage {

    static get amount() {
        return cy.get('#mat-select-value-1');
    }

    static get amountVali() {
        return cy.get('div[class="mat-paginator-range-label"]');
    }

    static get amountChange() {
        return cy.get('span[class="mat-option-text"]');
    }

    static get searchButton() {
        return cy.get('mat-icon[class="mat-icon notranslate mat-ripple mat-search_icon-search ng-tns-c254-1 material-icons mat-icon-no-color"]');
      }
    
    static get searchInput() {
        return cy.get('#mat-input-0');
    }

    static get addToBasket() {
        return cy.get('button[aria-label="Add to Basket"]');
    }

    static get myBasket() {
        return cy.get('button[aria-label="Show the shopping cart"]');
    }
}
export default ProductsPage;