const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'appiumCodeceptJs',
  tests: './steps/*_test.js', // os arquivos de testes sao os que tem esse sufixo
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
    app: 'C:\\Projetos_Outros\\Estudo\\Appium\\app-release.apk',
    platform: 'Android',
    device: 'Pixel7API33',
    port: 4723,
    browser: '',
    capabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: process.env.DEVICE || 'Emulator',
        platformName: process.env.PLATFORM || 'Android',
        platformVersion: process.env.OS_VERSION || '13.0',
        automationName: process.env.ENGINE || 'UIAutomator2',
        avd: process.env.UDID || 'Pixel7API33'
      }
    },
   /* Appium: {
      appiumV2: true, // set this to true to try out appium 2.x
      app: 'C:\\Projetos_Outros\\Estudo\\Appium\\app-release.apk',
      platform: 'Android',
      device: 'emulator',
      port: 4723,
      path: '/wd/hub',
      browser: '',
      desiredCapabilities:{
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "Pixel-7API33",
        platformVersion: "13",
        automationName: 'UIAutomator2',
        //automationName: process.env.AUTOMATIONNAME  
      },    
    }
    
    Appium: {
          appiumV2: true,
          platform: process.env.PLATFORM || 'Android',
          app: process.env.APP || 'C:\\Projetos_Outros\\Estudo\\Appium\\app-release.apk',
          desiredCapabilities: {
            deviceName: process.env.DEVICE || 'Pixel7API33',
            platformVersion: process.env.VERSION || '13', //versao sistema operacional
            appPackage: process.env.platform === 'Android' ? process.env.PACKAGE : "" || 'com.qazandoapp',
            appActivity: process.env.platform === 'Android' ? process.env.ACTIVITY : "" || 'MainActivity'
            //automationName: process.env.AUTOMATIONNAME  
          },
    }*/
  },
  include: {
    I: './steps_file.js', // inclusao do ator

    loginPage: "./pages/login_page.js",

    home_pagePage: "./pages/home_page.js",
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
  }
}