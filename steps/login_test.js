const home_page = require("../pages/home_page");

/*Before (()=>{});//antes de cada cenario
BeforeSuite(()=>{})//antes da suite de teste
After (()=>{});//dps de cada cenario
AfterSuite(()=>{})//dps da suite de teste*/
Feature('login');
const {I, loginPage} = inject();
Scenario('Login with success',  () => {
    loginPage.doLogin('teste@teste.com',123456)

    /*DEBUG*/
    pause();
    /*DEBUG*/
    home_page.checkLoginSuccess();
    
});

Scenario('Login with error',  () => {
    loginPage.doLogin('tzeste@teste.com',123456)
    loginPage.checkLoginError();	
});