criação de arquivo de teste: npx codeceptjs gt

Execução dos testes:
npx codeceptjs run --steps

Exucução testes android:
npm run test_android

Execução dos teste em duas plataformas:
PLATFORM=Android APP='caminhoAPK' DEVICE=<nomeDevice> VERSION=<vAndroid> PACKAGE:<appPackage> ACTIVITY:<appActivity> npx codeceptjs run --steps

      platform: 'Android',
      app: 'C:\\Projetos_Outros\\Estudo\\Appium\\app-release.apk', //como fazer pra nao usar o caminho da minha maquina???
      desiredCapabilities: 
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "Pixel_7_API_33",
        platformVersion: "13"  //versao android
         