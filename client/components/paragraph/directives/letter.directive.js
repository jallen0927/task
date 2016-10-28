'use strict';

(function (app) {
    app.directive('letter', [
        function () {
            return {
                scope: {
                    add: '&',
                    remove: '&'
                },
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.preventDefault();
                        if(element.hasClass('highlight')) {
                            scope.remove({letter: scope.$parent.letter});
                            element.removeClass('highlight');
                        } else {
                            scope.add({letter: scope.$parent.letter});
                            element.addClass('highlight');
                        }
                    })
                }
            }
        }
    ]);
})(angular.module('app.paragraph'));
