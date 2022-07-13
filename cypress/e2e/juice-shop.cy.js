import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import TaskPage from "../pageObjects/TaskPage";
import BasketPage from "../pageObjects/BasketPage";
import SelectAddressPage from "../pageObjects/SelectAddressPage";
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import OrderSummaryPage from "../pageObjects/OrderSummaryPage";
import OrderCompletionPage from "../pageObjects/OrderCompletionPage";
import SavedAddressesPage from "../pageObjects/SavedAddressesPage";
import CreateAddressPage from "../pageObjects/CreateAddressPage";
import SavedPaymentMethodsPage from "../pageObjects/SavedPaymentMethodsPage";


describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    // Click Account button
    LoginPage.account.click();
    // Click Login button
    LoginPage.login.click();
    // Set email value to "demo"
    LoginPage.email.type("demo");
    // Set password value to "demo"
    LoginPage.password.type("demo");
    // Click Log in
    LoginPage.loginButton.click();
    // Click Account button
    LoginPage.account.click();
    // Validate that "demo" account name appears in the menu section
    LoginPage.accountVali.should("contain.text", "demo");
  });

  it("Registration", () => { // - unfinished
    // Click Account button
    RegistrationPage.account.click();
    // Login button
    RegistrationPage.login.click();
    // Click "Not yet a customer?"
    RegistrationPage.customer.click();
    // Find - how to generate random number in JS
    const val = Math.floor(1000 + Math.random() * 9000); // 4 digits
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    const email = `email_${val}@ebox.com`;
    RegistrationPage.emailControl.type(email);
    // Fill in password field and repeat password field with same password
    RegistrationPage.passwordControl.type("johndoe123");
    RegistrationPage.repeatPasswordControl.type("johndoe123");
    // Click on Security Question menu
    RegistrationPage.security.click();
    // Select  "Name of your favorite pet?"
    RegistrationPage.question.click();
    // Fill in answer
    RegistrationPage.answer.type("Nina");
    // Click Register button
    RegistrationPage.register.click();
    // Set email value to previously created email
    LoginPage.email.type(email);
    // Set password value to previously used password value
    LoginPage.password.type("johndoe123");
    // Click login button
    LoginPage.loginButton.click();
    // Click Account button
    RegistrationPage.account.click();
    // Validate that account name (with previously created email address) appears in the menu section
    LoginPage.accountVali.should("contain.text", email);
  });
});


describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    TaskPage.searchButton.click();
    // Search for Lemon
    TaskPage.searchInput.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    TaskPage.itemLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    TaskPage.descriptionLemon.should("contain.text", "Sour but full of vitamins.");
  });

  it("Search and validate Lemon 500ml, multiple cards", () => {
    // Click on search icon
    TaskPage.searchButton.click();
    // Search for 500ml
    TaskPage.searchInput.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    TaskPage.itemLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    TaskPage.descriptionLemon.should("contain.text", "Sour but full of vitamins.");
  });

  it("Search and validate 500ml cards", () => {
    // Click on search icon
    TaskPage.searchButton.click();
    // Search for 500ml
    TaskPage.searchInput.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    TaskPage.itemEggfruit.click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    TaskPage.descriptionEggfruit.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    TaskPage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
    TaskPage.itemLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    TaskPage.descriptionLemon.should("contain.text", "Sour but full of vitamins.");
    // Close the card
    TaskPage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
    TaskPage.itemStrawberry.click();
    // Validate that the card (should) contains "Sweet & tasty!"
    TaskPage.descriptionStrawberry.should("contain.text", "Sweet & tasty!");
  });

  it("Search and read a review", () => {
    // Click on search icon
    TaskPage.searchButton.click();
    // Search for King
    TaskPage.searchInput.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    TaskPage.itemKing.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(500);
    TaskPage.reviewOpen.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    TaskPage.reviewVali.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Search and add a review", () => {
    // Click on search icon
    TaskPage.searchButton.click();
    // Search for Raspberry
    TaskPage.searchInput.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    TaskPage.itemRaspberry.click();
    // Type in review - "Tastes like metal"
    cy.wait(500);
    TaskPage.reviewWrite.type("Tastes like metal");
    // Click Submit
    TaskPage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(500);
    TaskPage.reviewOpen.click();
    // Validate review -  "Tastes like metal"
    TaskPage.reviewVali.should("contain.text","Tastes like metal");
  });


  it("Products - Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    TaskPage.amountVali.should("contain.text","12");
    // Change items per page (at the bottom of page) to 24
    TaskPage.amount.click();
    TaskPage.amountChange.contains("24").click();
    // Validate that the amount of cards is 24
    TaskPage.amountVali.should("contain.text","24");
    // Change items per page (at the bottom of page) to 36
    TaskPage.amount.click();
    TaskPage.amountChange.contains("36").click();
    // Validate that the amount of cards is 35
    TaskPage.amountVali.should("contain.text","35");
  });

  it("Products - Buy Girlie T-shirt", () => {
    // Click on search icon
    TaskPage.searchButton.click();
    // Search for Girlie
    TaskPage.searchInput.type("Girlie{enter}");
    // Add to basket "Girlie"
    TaskPage.addToBasket.click();
    // Click on "Your Basket" button
    TaskPage.myBasket.click();

    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();

    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.address.click();
    // Click Continue button
    SelectAddressPage.continue.click();
    
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.delivery.click();
    // Click Continue button
    DeliveryMethodPage.continue.click();

    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.card.click();
    // Click Continue button
    PaymentOptionsPage.continue.click();

    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.pay.click();

    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.orderVali.should("contain.text","Thank you for your purchase!");
  });


  it("Add address", () => {
    // Click on Account
    LoginPage.account.click();
    // Click on Orders & Payment
    TaskPage.ordersPayment.click();
    // Click on My saved addresses
    TaskPage.myAddresses.click();

    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.address.click();

    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.country.type("Latvia");
    CreateAddressPage.name.type("John");
    CreateAddressPage.number.type("277123021");
    CreateAddressPage.code.type("371");
    CreateAddressPage.address.type("Maizes iela 24");
    CreateAddressPage.city.type("Aizpute");
    CreateAddressPage.state.type("Kurzeme");
    // Click Submit button
    CreateAddressPage.submit.click();
    // Validate that previously added address is visible
    CreateAddressPage.addressVali.should("contain.text","Maizes iela 24, Aizpute, Kurzeme, 371");
  });


  it("Add payment option", () => {
    // Click on Account
    LoginPage.account.click();
    // Click on Orders & Payment
    TaskPage.ordersPayment.click();
    // Click on My payment options
    TaskPage.myPayment.click();

    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addNew.click();
    // Fill in Name
    SavedPaymentMethodsPage.name.type("John");
    // Fill in Card Number
    SavedPaymentMethodsPage.card.type("1234567887654321");
    // Set expiry month to 7
    SavedPaymentMethodsPage.month.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.year.select("2090");
    // Click Submit button
    SavedPaymentMethodsPage.submit.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.paymentVali.should("contain.text","4321 John7/2090");
  });
});