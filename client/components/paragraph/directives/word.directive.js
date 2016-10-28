'use strict';


(function (app) {
    app.directive('word', [function () {
        return {
            scope: {
                add: '&',
                remove: '&'
            },
            link: function (scope, element, attrs) {
                element.on('contextmenu', function (e) {
                    e.preventDefault();
                    if(element.hasClass('highlight')) {
                        scope.remove({word: scope.$parent.word});
                        element.removeClass('highlight');
                    } else {
                        scope.add({word: scope.$parent.word});
                        element.addClass('highlight');
                    }
                })
            }
        }
    }]);
})(angular.module('app.paragraph'));
