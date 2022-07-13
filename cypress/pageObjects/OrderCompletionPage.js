import BasePage from '../pageObjects/basePage'

class OrderCompletionPage extends BasePage {

    static get orderVali() {
        return cy.get('h1[class="confirmation"]');
    }
    
}
export default OrderCompletionPage;