import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "./page-object/homepage";
import logoutPage from "./page-object/logoutPage";

Given(/^John use library computer and open demoblaze website$/, () => {
    homePage.open();
    homePage.logIn('Log in');
    homePage.clickLoginDetail();
    homePage.inputLogInUsername('wibowo.bullseye');
    homePage.inputLogInPassword('bullseye');
    homePage.clickLoginBtn('Log in');
    homePage.logInInfoDetail();
});

When(/^John want to signout from demobalze website$/, () => {
    logoutPage.clickLogOutBtn('Log out');
    })

Then(/^he can logout from the website$/, () => {
    logoutPage.succesfullyLogout();
});
