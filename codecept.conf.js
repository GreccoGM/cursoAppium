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
const path =  require("path");

exports.config = {
  name: 'appiumCodeceptJs',
  tests: './steps/*_test.js', // os arquivos de testes sao os que tem esse sufixo
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: path.join(
        __dirname,
        "app-release.apk"
      ),
      platform: "Android",
      device: "emulator-5554",
      path: "/",
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        deviceName: "emulator-5554",
        platformName: "Android",
        appActivity: "MainActivity",
        automationName: "UiAutomator2",
      },
    },
  },
  include: {
    I: './steps_file.js', // inclusao do ator

    loginPage: "./pages/login_page.js",

    homePage: "./pages/home_page.js",
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