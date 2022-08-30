exports.config = {
    // ====================
    // Appium Configuration
    // ====================
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    logLevel: 'debug',
    connectionRetryTimeout:600000,
    connectionRetryCount: 5,
    services: [
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    address: 'localhost',
                    port: 4723,
                    basePath:'/wd/hub'
                },
                command: 'appium',
            },
        ],
    ],
};

