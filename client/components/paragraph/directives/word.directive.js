'use strict';


(function(app) {
    app.directive('word', [function () {
        return {
            restrict: 'AE',
            scope: {
                add: '&',
                remove: '&'
            },
            link: function (scope, element, attrs) {
                var word = scope.$parent.word;
                    scope.$parent.selected = false;
                element.on('contextmenu', function (e) {
                    e.preventDefault();
                    scope.$parent.selected ? scope.remove({word: word}) : scope.add({word: word});
                    scope.$apply(scope.$parent.selected = !scope.$parent.selected);
                })
            }
        }
    }]);
})(angular.module('app.paragraph'));
