const path = require('path');
const { config } = require('./wdio.shared.conf');

config.specs = [
    './test/specs/**/*.js',
];

config.capabilities = [
    {
        "platformName": "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel XL",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./apps/homegate/android/builds/4524.apk"),
        "appium:autoGrantPermissions": true,
        "appium:appPackage": "ch.homegate.mobile.alpha",
        "appium:appActivity": "ch.homegate.mobile.search.SearchActivity"
    }
];

exports.config = config;