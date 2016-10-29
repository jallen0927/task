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
                    var letter = scope.$parent.letter;
                    scope.$parent.selected = false;
                    element.on('click', function (e) {
                        e.preventDefault();
                        scope.$parent.selected ? scope.remove({letter: letter}) : scope.add({letter: letter});
                    });

                    scope.$on('select', function (e, args) {
                        if(args.sound_code === letter.sound_code) {
                            scope.$apply(scope.$parent.selected = true);
                        }
                    });

                    scope.$on('unSelect', function (e, args) {
                        if(args.sound_code === letter.sound_code) {
                            scope.$apply(scope.$parent.selected = false);
                        }
                    });
                }
            }
        }
    ]);
})(angular.module('app.paragraph'));
