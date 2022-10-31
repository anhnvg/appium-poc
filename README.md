# appium-poc
Welcome to the hybrid UI Automation test. This is aimed to facililate the UI automation using Appium + TypeScript + WDIO framework
This is the basic structure, the advance structure need time to engineering

Things to added for the demo next Monday **Reports**



```
├─ .github
│  └─ workflows
│     └─ main.yml
├─ apps
│  └─ homegate
│     ├─ android
│     │  └─ builds
│     │     └─ 4524.apk
│     └─ iOS
│        └─ builds
│           └─ homegate.ch.app.zip
├─ config
│  ├─ wdio.android.app.conf.ts
│  ├─ wdio.ios.app.conf.ts
│  ├─ wdio.shared.conf.ts
│  └─ wdio.shared.local.appium.conf.ts
├─ tests
│  ├─ logs
│  │  └─ wdio-appium.log
│  ├─ screenobjects
│  │  ├─ base
│  │  │  ├─ screen
│  │  │  │  └─ app.screen.ts
│  │  │  └─ validator
│  │  │     ├─ IValidatator.ts
│  │  │     └─ base.validator.ts
│  │  └─ search
│  │     ├─ search.action.ts
│  │     ├─ search.element.ts
│  │     └─ search.validator.ts
│  └─ specs
│     └─ search.spec.ts
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
└─ tsconfig.json
```
### Basic Road map

Things not added
- Parralel testing - to be added later using Appium Grid


Team's questions:
- What if we can't run on Firebase, can't have the Appelium? Anh: We have logs and test report using Allure Report with screenshots and video

***[Appium logs](https://github.com/anhnvg/appium-poc/actions/runs/3341502801)***

***[Allure Reports](https://docs.qameta.io/allure-report/)***

- How to make it easy to maintain?

Using the cloud such as Github Hosted Runner (Mac-os runner for iOS), but have limitation only have Emu/Simu or AWS device farm (Real Device)

If everyone does not want to rely on Typescript, prefer native, then I can use Kotlin + Appium

<img width="984" alt="image" src="https://user-images.githubusercontent.com/101088921/198966629-58b5b36c-4afb-4860-a6cd-0c72cb2b7eef.png">
