import {config} from "./wdio.shared.conf";

config.services = (config.services ? config.services : []).concat([
    [
        "appium",
        {
            args: {
                relaxedSecurity: true,
                address: 'localhost',
                port: 4724,
                basePath: '/wd/hub'
            },
            logPath: './tests/logs',
            command: 'appium',
        }
    ],
]);

export default config;