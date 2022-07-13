import BasePage from '../pageObjects/basePage'

class OrderSummaryPage extends BasePage {

    static get pay() {
        return cy.get('#checkoutButton');
    }
    
}
export default OrderSummaryPage;