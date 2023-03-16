import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "./page-object/homepage";
import productDetailPage from "./page-object/productDetailPage";
import cartPage from "./page-object/cartPage";
import placeOrder from "./page-object/placeOrder";

Given(/^Budi visit demobalze website$/, () => {
    homePage.open()
    homePage.clickProductDetailLink('Samsung galaxy s6');
});


When(/^Budi found an item that he like$/, () => {
    productDetailPage.verifyProductPage('Samsung galaxy s6');
    productDetailPage.clickAddButton('Add to Cart');
    productDetailPage.verifyProductAddtoCart();
    });

Then(/^he can add the item to cart and place an order$/, () => {
    cartPage.cart();
    cartPage.verifyFirstItemGoodsName('Samsung galaxy s6');
    cartPage.verifyTotalPriceCart('360');
    placeOrder.clickAddOrderButton('Place Order');
    placeOrder.addNameDetail('Raihan');
    placeOrder.inputCountryDetail('Indonesia');
    placeOrder.inputCityDetail('Tangerang Selatan');
    placeOrder.inputCardDetail('03213142');
    placeOrder.inputMonthDetail('March');
    placeOrder.inputYearDetail('2022');
    placeOrder.purchaseOrderBtn('Purchase');

});
