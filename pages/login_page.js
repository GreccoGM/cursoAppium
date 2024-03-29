const { I } = inject();

module.exports = {
  fields:{
    email: '~email',
    password: '~senha'
  },
  buttons:{
    enter: '~entrar'
  }, 
  messages:{
    loginError: '~lognFail'
  },

  doLogin(email, password){
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.password, password)
    
    I.tap(this.buttons.enter)
  },

  checkLoginError(){
    I.retry(4).waitForElement(this.messages.loginError,5) //maximo de 4x no retry

    I.waitForElement(this.messages.loginError,5)
    I.seeElement(this.messages.loginError)
  }
}
