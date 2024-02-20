const { I } = inject();

module.exports = {
  buttons:{
    save: '~salvar'
  }, 

  checkLoginSuccess(){
    I.waitForElement(this.buttons.save,5)
    I.seeElement(this.buttons.save)
  }
}
