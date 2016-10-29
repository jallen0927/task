'use strict';

describe('Task Tests', function () {
    beforeEach(function () {
        browser.get('index.html');
    });

    it('should have word and letter elements', function () {
        expect(element(by.tagName('word')).count()).toBeGreaterThan(0);
    })
});