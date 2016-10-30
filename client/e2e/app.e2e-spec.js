'use strict';


describe('Task Tests', function () {
    beforeEach(function () {
        browser.get('index.html');
    });
    var words = element.all(by.tagName('word')),
        letters = element.all(by.tagName('letter')),
        firstE = letters.get(0),
        elementX = letters.get(1),
        secondE = letters.get(22);

    it('should have 5 words elements', function () {
        expect(words.count()).toEqual(5);
    });

    it('should have 25 letters elements', function () {
        expect(letters.count()).toEqual(25);
    });

    it('should get highlight class after right click on each word', function () {

        words.each(function (element) {
            browser.actions().mouseMove(element).perform();
            browser.actions().click(protractor.Button.RIGHT).perform();
            expect(element.getAttribute('class')).toContain('highlight');
            browser.actions().click(protractor.Button.RIGHT).perform();
            expect(element.getAttribute('class')).not.toContain('highlight');
        })
    });

    it('should highlight both first e in expensive and e in fingers when click the first;', function () {
        browser.actions().mouseMove(firstE).perform();
        browser.actions().click().perform();
        expect(firstE.getAttribute('class')).toContain('highlight');
        expect(secondE.getAttribute('class')).toContain('highlight');
    });

    it('should not highlight x in expensive when click on first e in expensive', function () {
        browser.actions().mouseMove(firstE).perform();
        browser.actions().click().perform();
        expect(elementX.getAttribute('class')).not.toContain('highlight');
    });

    it('should unhighlight both e when the second time click on the second e', function () {
        browser.actions().mouseMove(firstE).perform();
        browser.actions().click().perform();
        browser.actions().mouseMove(secondE).perform();
        browser.actions().click().perform();
        expect(firstE.getAttribute('class')).not.toContain('highlight');
        expect(secondE.getAttribute('class')).not.toContain('highlight');
    });

});