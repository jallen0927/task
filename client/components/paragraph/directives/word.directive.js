'use strict';


(function (app) {
    app.directive('word', [function () {
        return {
            scope: {
                highlight: '&'
            },
            link: function (scope, element, attrs) {
                element.on('contextmenu', function (e) {
                    e.preventDefault();
                    scope.highlight({word: scope.$parent.word});
                    element.toggleClass('highlight');
                })
            }
        }
    }]);
})(angular.module('app.paragraph'));
