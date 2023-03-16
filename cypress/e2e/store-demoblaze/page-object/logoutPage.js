class logoutPage{
    elements = {
        logOutBtn: () => cy.get("[onclick='logOut()']"),
        logoutSucces: () => cy.get('#narvbarx')

    }
    clickLogOutBtn(){
        this.elements.logOutBtn().should('be.visible')
        cy.wait(1000)
    }
    succesfullyLogout(){
        this.elements.logoutSucces().should('be.visible')
    }
}

module.exports = new logoutPage();