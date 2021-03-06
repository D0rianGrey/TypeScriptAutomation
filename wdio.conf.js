exports.config = {
    hostname: "localhost",
    port: 4444,
    path: "/wd/hub",
    specs: ["./tests/test.ts"],
    //specs: ["./features/*.feature"],
    sync: true,
    services: ["selenium-standalone"],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    baseUrl: "http://ip-5236.sunline.net.ua:38015",
    framework: "mocha",
    //framework: "cucumber",
    mochaOpts: {
        ui: "bdd",
        timeout: 120000
    },
    reporters: ['spec'],
    before: function (capabilities, specs) {
        process.env.TS_NODE_FILES = true;
        require("ts-node").register();
        const chai = require("chai"),
            expect = chai.expect; // preference and tested with expect

        chai.use(require("chai-sorted"));
    }
};
