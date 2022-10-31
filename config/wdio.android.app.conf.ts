import {join} from 'path';
import config from './wdio.shared.local.appium.conf';

config.specs = [
    './tests/specs/*.spec.ts'
];

// @ts-ignore
config.capabilities = [
    {
        "platformName": "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel XL",
        "appium:automationName": "UIAutomator2",
        "appium:app": join(process.cwd(), "./apps/homegate/android/builds/4524.apk"),
        "appium:autoGrantPermissions": true,
        "appium:appPackage": "ch.homegate.mobile.alpha",
        "appium:appActivity": "ch.homegate.mobile.search.SearchActivity"
    }
];

exports.config = config;