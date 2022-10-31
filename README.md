# appium-poc
Welcome to the hybrid UI Automation test. This is aimed to facililate the UI automation using Appium + TypeScript + WDIO framework

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
