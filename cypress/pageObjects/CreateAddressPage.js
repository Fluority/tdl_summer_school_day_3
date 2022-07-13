import BasePage from '../pageObjects/basePage'

class CreateAddressPage extends BasePage {

    static get country() {
        return cy.get('#mat-input-1');
    }

    static get name() {
        return cy.get('#mat-input-2');
    }

    static get number() {
        return cy.get('#mat-input-3');
    }

    static get code() {
        return cy.get('#mat-input-4');
    }
    
    static get address() {
        return cy.get('#address');
    }

    static get city() {
        return cy.get('#mat-input-6');
    }

    static get state() {
        return cy.get('#mat-input-7');
    }

    static get submit() {
        return cy.get('#submitButton');
    }

    static get addressVali() {
        return cy.get('mat-cell[class="mat-cell cdk-cell cdk-column-Address mat-column-Address ng-star-inserted"]');
    }
    
}
export default CreateAddressPage;