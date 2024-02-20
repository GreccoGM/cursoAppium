criação de arquivo de teste: npx codeceptjs gt

Execução dos testes:
npx codeceptjs run --steps

Exucução testes android:
npm run test_android

Execução dos teste em duas plataformas:
PLATFORM=Android APP='caminhoAPK' DEVICE=<nomeDevice> VERSION=<vAndroid> PACKAGE:<appPackage> ACTIVITY:<appActivity> npx codeceptjs run --steps

criaçao de pages: npx codeceptjs gpo