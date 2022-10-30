
export const config: WebdriverIO.Config = {
    runner: "local",
    // The tests-files are specified in:
    // - wdio.android.app.conf.ts
    // - wdio.ios.app.conf.ts
    //
    /**
     * NOTE: This is just a placeholder and will be overwritten by each specific configuration
     */
    specs: [],
    // The capabilities are specified in:
    // - wdio.android.app.conf.ts
    // - wdio.ios.app.conf.ts
    //
    /**
     * NOTE: This is just a placeholder and will be overwritten by each specific configuration
     */
    capabilities: [],
    logLevel: "debug",

    bail: 0,
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: "",
    // Default timeout for all waitFor* commands.
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    waitforTimeout: 45000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 600000,
    // Default request retries count
    connectionRetryCount: 5,
    services: [],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
