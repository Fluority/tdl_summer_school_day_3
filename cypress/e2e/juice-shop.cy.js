import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SearchPage from "../pageObjects/SearchPage";
import ProductsPage from "../pageObjects/ProductsPage";
import BasketPage from "../pageObjects/BasketPage";

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
    RegistrationPage.question.click(); // - wrong
    // Fill in answer
    // Click Register button
    // Set email value to previously created email
    // Set password value to previously used password value
    // Click login button
    // Click Account button
    // Validate that account name (with previously created email address) appears in the menu section
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for Lemon
    SearchPage.searchInput.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    SearchPage.itemLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.descriptionLemon.should("contain.text", "Sour but full of vitamins.");
  });

  it("Search and validate Lemon 500ml, multiple cards", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for 500ml
    SearchPage.searchInput.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    SearchPage.itemLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.descriptionLemon.should("contain.text", "Sour but full of vitamins.");
  });

  it("Search and validate 500ml cards", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for 500ml
    SearchPage.searchInput.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    SearchPage.itemEggfruit.click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    SearchPage.descriptionEggfruit.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    SearchPage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
    SearchPage.itemLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.descriptionLemon.should("contain.text", "Sour but full of vitamins.");
    // Close the card
    SearchPage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
    SearchPage.itemStrawberry.click();
    // Validate that the card (should) contains "Sweet & tasty!"
    SearchPage.descriptionStrawberry.should("contain.text", "Sweet & tasty!");
  });

  it("Search and read a review", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for King
    SearchPage.searchInput.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    SearchPage.itemKing.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(500);
    SearchPage.reviewOpen.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    SearchPage.reviewVali.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Search and add a review", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for Raspberry
    SearchPage.searchInput.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    SearchPage.itemRaspberry.click();
    // Type in review - "Tastes like metal"
    cy.wait(500);
    SearchPage.reviewWrite.type("Tastes like metal");
    // Click Submit
    SearchPage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(500);
    SearchPage.reviewOpen.click();
    // Validate review -  "Tastes like metal"
    SearchPage.reviewVali.should("contain.text","Tastes like metal");
  });


  it("Products - Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    ProductsPage.amountVali.should("contain.text","12");
    // Change items per page (at the bottom of page) to 24
    ProductsPage.amount.click();
    ProductsPage.amountChange.contains("24").click();
    // Validate that the amount of cards is 24
    ProductsPage.amountVali.should("contain.text","24");
    // Change items per page (at the bottom of page) to 36
    ProductsPage.amount.click();
    ProductsPage.amountChange.contains("36").click();
    // Validate that the amount of cards is 35
    ProductsPage.amountVali.should("contain.text","35");
  });

  it.only("Products - Buy Girlie T-shirt", () => {
    // Click on search icon
    ProductsPage.searchButton.click();
    // Search for Girlie
    ProductsPage.searchInput.type("Girlie{enter}");
    // Add to basket "Girlie"
    ProductsPage.addToBasket.click();
    // Click on "Your Basket" button
    ProductsPage.myBasket.click();

    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
  });

  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage
  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible

  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
});