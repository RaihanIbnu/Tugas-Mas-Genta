class placeOrder{
    elements = {
        placeOrderBtn: () => cy.get('.btn-success').contains('Place Order'),
        inputNameDetail: () =>  cy.get('#name'),
        inputCountryDetail: () => cy.get('#country'),
        inputCityDetail: () => cy.get('#city'),
        inputCardDetail: () =>cy.get('#card'),
        inputMonthDetail: () => cy.get('#month'),
        inputYearDetail: () => cy.get('#year'),
        purchaseOrderBtn: () =>cy.get("[onclick='purchaseOrder()']").contains('Purchase')

    }
    clickAddOrderButton (){
        this.elements.placeOrderBtn().click(); 
    }
    addNameDetail (name){
        this.elements.inputNameDetail().type(name).should('have.value', name);
    }
    inputCountryDetail (country){
        this.elements.inputCountryDetail().type(country).should('have.value', country);
    }
    inputCityDetail (city){
        this.elements.inputCityDetail().type(city).should('have.value', city);
    }
    inputCardDetail(cardNumber){
        this.elements.inputCardDetail().type(cardNumber).should('have.value', cardNumber);
    }
    inputMonthDetail(month){
        this.elements.inputMonthDetail().type(month).should('have.value', month);
    }
    inputYearDetail(year){
        this.elements.inputYearDetail().type(year).should('have.value',year);
    }
    purchaseOrderBtn(){
        this.elements.purchaseOrderBtn().click();
    }

}

module.exports = new placeOrder();