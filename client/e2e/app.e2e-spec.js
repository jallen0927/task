'use strict';


describe('Task Tests', function () {
    beforeEach(function () {
        browser.get('index.html');
    });
    var words = element.all(by.tagName('word')),
        letters = element.all(by.tagName('letter')),
        firstS = letters.get(2),
        secondS = letters.get(6),
        lastS = letters.get(24);

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

    it('should highlight both s in expensive when click the first;', function () {
        browser.actions().mouseMove(firstS).perform();
        browser.actions().click().perform();
        expect(firstS.getAttribute('class')).toContain('highlight');
        expect(secondS.getAttribute('class')).toContain('highlight');
    });

    it('should not highlight s in fingers when click on first s in expensive', function () {
        browser.actions().mouseMove(firstS).perform();
        browser.actions().click().perform();
        expect(lastS.getAttribute('class')).not.toContain('highlight');
    });

    it('should unhighlight both s in expensive when the second time click on the second s', function () {
        browser.actions().mouseMove(firstS).perform();
        browser.actions().click().perform();
        browser.actions().mouseMove(secondS).perform();
        browser.actions().click().perform();
        expect(firstS.getAttribute('class')).not.toContain('highlight');
        expect(secondS.getAttribute('class')).not.toContain('highlight');
    });

});