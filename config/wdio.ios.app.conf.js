const path = require('path');
const { config } = require('./wdio.shared.conf');

config.specs = [
    './test/specs/**/*.js',
];

config.capabilities = [
    {
        'platformName': 'iOS',
        'appium:platformVersion': '15.5',
        'appium:deviceName': 'iPhone 12',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'apps/homegate/iOS/builds/homegate.ch.app.zip'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
