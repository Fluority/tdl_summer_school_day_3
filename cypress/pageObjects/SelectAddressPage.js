import BasePage from '../pageObjects/basePage'

class SelectAddressPage extends BasePage {

    static get address() {
        return cy.get('#mat-radio-40');
    }

    static get continue() {
        return cy.get('button[aria-label="Proceed to payment selection"]')
    }
    
}
export default SelectAddressPage;