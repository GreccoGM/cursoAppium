const { I } = inject();

module.exports = {
  buttons:{
    save: '~salvar'
  }, 

  fields:{
    code: {android:'~codigo', ios:'X'}, //exemplo de como usar quando tiver mais de uma plataforma
    name:'~aluno',
    search:'~search'
  },
/*
  fillCode(code){
    I.fillField(this.fields.code, code)
  },
  fillName(name){
    I.fillField(this.fields.name,name)
  },*/
  fillSearch(search){
    I.fillField(this.fields.search, search)
  },
  registerStudent(code,name){
    I.fillField(this.fields.name,name)
    I.fillField(this.fields.code, code)
    I.tap(this.buttons.save)
  },

  
  searchStudent(search,checkNumber){
    I.fillField(this.fields.search, search)
    /*I.runOnIOS(() =>{
      I.seeElement('widget.TextView[@text="'+checkNumber+'" - "'+1234+'"]')//nao funciona
    })
    I.runOnAndroid(() =>{*/
       I.fillField(this.fields.search, search);
    const xpath = `//android.widget.TextView[@text='${checkNumber} - ${search}']`;
    I.seeElement(xpath);
    //})


  },
  checkLoginSuccess(){
    I.waitForElement(this.buttons.save,5)
    I.seeElement(this.buttons.save)
  }
}
