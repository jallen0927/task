'use strict';


(function(app) {
    app.directive('word', [function () {
        return {
            restrict: 'E',
            controller: function() {

            },
            bindToController: {
                add: '&',
                remove: '&',
                word: '='
            },
            controllerAs: 'wordCtl',
            link: function (scope, element, attrs, wordCtl) {
                var word = wordCtl.word;
                wordCtl.selected = false;
                element.on('contextmenu', function (e) {
                    e.preventDefault();
                    wordCtl.selected ? wordCtl.remove({word: word}) : wordCtl.add({word: word});
                    scope.$apply(wordCtl.selected = !wordCtl.selected);
                })
            }
        }
    }]);
})(angular.module('app.paragraph'));
