'use strict';

exports.config = {
    allScriptsTimeout: 11000,
    baseUrl: 'http://task.shawn/index.html',
    specs: ['./client/e2e/app.e2e-spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};