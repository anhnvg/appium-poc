import {join} from 'path';
import config from './wdio.shared.local.appium.conf';

config.specs = [
    './tests/specs/*.spec.ts'
];

config.capabilities = [
    {
        'platformName': 'iOS',
        'appium:platformVersion': '15.5',
        'appium:deviceName': 'iPhone 12',
        'appium:automationName': 'XCUITest',
        'appium:app': join(process.cwd(), 'apps/homegate/iOS/builds/homegate.ch.app.zip'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 600,
        'appium:simulatorStartupTimeout': 600000,
        'appium:isHeadless': false
    },
];

exports.config = config;
