'use strict';

(function(app) {
    app.directive('letter', [
        function () {
            return {
                restrict: 'E',
                controller: function () {

                },
                bindToController: {
                    add: '&',
                    remove: '&',
                    letter: '='
                },
                controllerAs: 'letterCtl',
                link: function (scope, element, attrs, letterCtl) {
                    var letter = letterCtl.letter;
                    letterCtl.selected = false;
                    element.on('click', function (e) {
                        e.preventDefault();
                        letterCtl.selected ? letterCtl.remove({letter: letter}) : letterCtl.add({letter: letter});
                    });

                    scope.$on('select', function (e, args) {
                        if(args.sound_code === letter.sound_code) {
                            scope.$apply(letterCtl.selected = true);
                        }
                    });

                    scope.$on('unSelect', function (e, args) {
                        if(args.sound_code === letter.sound_code) {
                            scope.$apply(letterCtl.selected = false);
                        }
                    });
                }
            }
        }
    ]);
})(angular.module('app.paragraph'));
