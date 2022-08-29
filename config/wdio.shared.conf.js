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
    services: [
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    address: 'localhost',
                    port: 4723
                },
                command: 'appium',
            },
        ],
    ],
};
