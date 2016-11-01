'use strict';

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'client/e2e/*e2e-spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
