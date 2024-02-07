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
    Appium: {
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: { 
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,  //versao sistema operacional
        appPackage: process.env.platform === 'Android' ? process.env.PACKAGE: "",
        appActivity: process.env.platform === 'Android' ? process.env.ACTIVITY: ""
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