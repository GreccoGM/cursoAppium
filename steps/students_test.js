Feature('students');

const {I, loginPage, homePage} = inject()
Scenario('Add student with success',  () => {
    loginPage.doLogin('teste@teste.com','123456')
    homePage.registerStudent ('9090','testeCurso')  

    homePage.searchStudent('testeCurso','9090')
});
