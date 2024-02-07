Feature('login');

Scenario('Login with success',  ({ I }) => {
    I.fillField('~email','teste@teste.com')
    I.fillField('~senha','123456')
    
    I.tap('#entrar')
//android.widget.TextView[@text="Entrar"]
    I.waitForElement('#salvar',5)
    I.seeElement('#salvar')
    //	
//android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup
//~codigo
});
