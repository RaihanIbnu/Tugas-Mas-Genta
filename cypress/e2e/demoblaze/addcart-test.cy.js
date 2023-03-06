describe("Demoblaze app addcart scenario", ()=>{
    it("Successfully addcart after login using correct username password", () => {
        cy.visit('https://www.demoblaze.com/index.html')

        // click link test login
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(2000)

        // fill username password
        cy.get('#loginusername').type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get('#loginpassword').type('bullseye').should('have.value', 'bullseye')

        // click login button
        cy.get("[onclick='logIn()']").click()

        // assert homepage
        cy.get('#nameofuser').should('contain', 'wibowo.bullseye')

        // add to cart
        cy.get('#cartur').click()
        cy,get('#btn-success').click()

        // input item
        cy.get('#name').type('Doritos').should('have.value', 'doritos')
        cy.get('#country').type('Indonesia').should('have.value', 'Indonesia')
        cy.get('##city').type('Tangerang Selatan').should('have.value', 'Tangerang Selatan')
        cy.get('#card').type('031421414124').should('have.value', '031421414124')
        cy.get('#month').type('January').should('have.value','January')
        cy.get('#year').type('2020').should('have.value','2020')

        // click purchase button
        cy.get("[onclick='purchaseOrder()']").click()

    })
})