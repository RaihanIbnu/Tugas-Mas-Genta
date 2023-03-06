describe("Demoblaze app logout scenario", ()=>{
    it("Successfully logout after login using correct username password", () => {
        cy.visit('https://www.demoblaze.com/index.html')

        // click link test login
        cy.get("[data-target='#logInModal']" ).click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(1000)

        // fill username password
        cy.get('#loginusername').type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get('#loginpassword').type('bullseye').should('have.value', 'bullseye')

        // click login button
        cy.get("[onclick='logIn()']").click()

        // assert homepage
        cy.get('#nameofuser').should('contain','wibowo.bullseye')

        // logut
        cy.get("[data-target='#logOutModal']").click()
        cy.get("[onclick='logOut()']").should('be.visible')
        cy.wait(1000)

        // click login button
        cy.get("[data-target='#logOutModal']").click()
        cy.get("[onclick='logOut()']").should('be.visible')
        cy.wait(1000)

    })
})