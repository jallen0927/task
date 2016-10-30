'use strict';

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'client/e2e/*e2e-spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://shawn-lin.com/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
