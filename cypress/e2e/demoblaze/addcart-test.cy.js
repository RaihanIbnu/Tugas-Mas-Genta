describe("Demoblaze app addcart scenario", ()=>{
    it("Successfully place an order after login using correct username password", () => {
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

        // add to cart
        cy.get('#cartur').click()

        //assert product menu
        cy.get('#page-wrapper > .row').should('be.visible')

        // place an order
        cy.get('.btn-success').click()

        // input detail
        cy.get('#name').type('Raihan').should('have.value', 'Raihan')
        cy.get('#country').type('Indonesia').should('have.value', 'Indonesia')
        cy.get('#city').type('Tangerang Selatan').should('have.value', 'Tangerang Selatan')
        cy.get('#card').type('031421414124').should('have.value', '031421414124')
        cy.get('#month').type('January').should('have.value','January')
        cy.get('#year').type('2020').should('have.value','2020')

        // click purchase button
        cy.get("[onclick='purchaseOrder()']").click()

    })
})