import BasePage from '../pageObjects/basePage'

class DeliveryMethodPage extends BasePage {

    static get delivery() {
        return cy.get('#mat-radio-43');
    }

    static get continue() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }
    
}
export default DeliveryMethodPage;