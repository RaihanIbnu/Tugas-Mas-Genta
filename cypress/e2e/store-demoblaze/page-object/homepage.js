class homePage{
    elements = {
        productDetailLink: (productName) => cy.get('a.hrefch').contains(productName),
        logInBtn: () => cy.get("[data-target='#logInModal']").contains('Log in'),
        logInDetail: () => cy.get("[onclick='logIn()']"),
        logInUsername: () => cy.get('#loginusername'),
        logInPassword: () => cy.get('#loginpassword'),
        clickLogin: () => cy.get("[onclick='logIn()']").contains('Log in'),
        loginInfo: () => cy.get('#nameofuser')

    }

    clickProductDetailLink (productName){
        this.elements.productDetailLink(productName).click();
        cy.wait(1000)
    }
    
    open(){
        cy.visit('https://www.demoblaze.com/');
    }
    logIn(){
        this.elements.logInBtn().click();
    }
    clickLoginDetail(){
        this.elements.logInDetail().should('be.visible');
        cy.wait(1000)
    }
    inputLogInUsername(username){
        this.elements.logInUsername().type(username).should('have.value', username)
    }
    inputLogInPassword(password){
        this.elements.logInPassword().type(password).should('have.value', password)
    }
    clickLoginBtn(){
        this.elements.clickLogin().click()
    }
    logInInfoDetail(){
        this.elements.loginInfo().should('contain','wibowo.bullseye')
    }
}
module.exports = new homePage();