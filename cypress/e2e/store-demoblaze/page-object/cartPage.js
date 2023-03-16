class cartPage{
    elements = {
        cart: () => cy.get('a.nav-link').contains('Cart'),
        firstItemGoodsName: () => cy.get('tbody#tbodyid').children('.success').children()
        .next('td'),
        totalPrice: (totalPrice) => cy.get('h3#totalp'),
    }

    cart (){
        this.elements.cart().click();
    }

    verifyFirstItemGoodsName (){
        this.elements.firstItemGoodsName().should('contain','Samsung galaxy s6')
    }

    verifyTotalPriceCart (){
        this.elements.totalPrice().should('contain','360');
    }
}

module.exports = new cartPage();