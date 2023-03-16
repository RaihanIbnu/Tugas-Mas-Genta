class productDetailPage{
    elements = {
        productNameLabel: () => cy.get('h2.name'),
        addCartToButton: () => cy.get('a.btn.btn-success.btn-lg').contains('Add to cart')
    }

    verifyProductPage(productName){
        this.elements.productNameLabel().should('contain', productName);
    }

    clickAddButton(buttonName){
        this.elements.addCartToButton().click();
    }

    verifyProductAddtoCart(){
        cy.on('window:alert',(text) => {
            expect(text).to.contains('Product added')});
    }
}

module.exports = new productDetailPage();