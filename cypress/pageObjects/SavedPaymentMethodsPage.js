import BasePage from '../pageObjects/basePage'

class SavedPaymentMethodsPage extends BasePage {

    static get addNew() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    static get name() {
        return cy.get('#mat-input-1');
        //return cy.get('#mat-form-field-label-33');
    }

    static get card() {
        return cy.get('#mat-input-2');
    }

    static get month() {
        return cy.get('#mat-input-3');
    }

    static get year() {
        return cy.get('#mat-input-4');
    }

    static get submit() {
        return cy.get('#submitButton');
    }

    static get paymentVali() {
        return cy.get('mat-row[class="mat-row cdk-row ng-star-inserted"]');
    }
    
}
export default SavedPaymentMethodsPage;