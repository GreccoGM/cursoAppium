const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'appiumCodeceptJs',
  tests: './*_test.js', // os arquivos de testes sao os que tem esse sufixo
  output: './output',
  helpers: {
    /*Appium: {
      platform: 'Android',
      app: 'C:\\Projetos_Outros\\Estudo\\Appium\\app-release.apk', //como fazer pra nao usar o caminho da minha maquina???
      desiredCapabilities:{
      appPackage: "com.qazandoapp",
      appActivity: "MainActivity",
        deviceName: "Pixel-7API33",
        platformVersion: "13" 
        //automationName: process.env.AUTOMATIONNAME  
      },    
    }*/
    Appium: {
      platform: process.env.PLATFORM ||'Android',
      app: process.env.APP || 'C:\\Projetos_Outros\\Estudo\\Appium\\app-release.apk',
      desiredCapabilities: { 
        deviceName: process.env.DEVICE || 'Pixel-7API33' ,
        platformVersion: process.env.VERSION || '13',  //versao sistema operacional
        appPackage: process.env.platform === 'Android' ? process.env.PACKAGE: "" || 'com.qazandoapp',
        appActivity: process.env.platform === 'Android' ? process.env.ACTIVITY: "" || 'MainActivity'
        //automationName: process.env.AUTOMATIONNAME  
      },    
    }
  },
  include: {
    I: './steps_file.js'  // inclusao do ator
  },
  plugins:{
    retryFailedStep:{
      enabled: true
    },
    screenshotOnFail:{
      enabled:true
    },
  }
}