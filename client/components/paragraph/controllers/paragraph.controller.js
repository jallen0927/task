'use strict';

(function(app, _) {
    app.controller('ParagraphCtl', ['$scope', 'ParagraphService',
        function($scope, ParagraphService) {
            //Set view model
            var vm = this;
                //Fetch paragraph data from back-end
            vm.paragraphs = ParagraphService.query();

            vm.sounds = [];
            vm.words = [];

            /**
             * Add a unique sound to result;
             * @param letter
             */
            vm.addSound = function (letter) {
                if(!_.findWhere(vm.sounds, {code: letter.sound_code})) {
                    vm.sounds.push({
                        code: letter.sound_code,
                        label: letter.sound_label
                    });
                }
                //Broadcast to all letters
                $scope.$broadcast('select', {sound_code: letter.sound_code});
            };

            /**
             * Remove letters from result; If there is more than one record matched, it will remove all of them.
             * @param letter
             */
            vm.removeSound = function (letter) {
                vm.sounds = _.without(vm.sounds, _.findWhere(vm.sounds, {
                    code: letter.sound_code
                }));
                //Broadcast to all letters
                $scope.$broadcast('unSelect', {sound_code: letter.sound_code});
            };

            /**
             * Add a unique word to result;
             * @param word
             */
            vm.addWord = function(word) {
                if(!_.findWhere(vm.words, {id: word.id}))
                vm.words.push(word);
            };

            /**
             * Remove words from result; If there is more than one record matched, it will remove all of them.
             * @param word
             */
            vm.removeWord = function (word) {
                vm.words = _.without(vm.words, _.findWhere(vm.words, {
                    id: word.id
                }));
            };

            /**
             * report result
             */
            vm.reportResult = function() {
                var result = {
                    sounds: vm.sounds,
                    words: vm.words
                };
                console.log(result);
            };
        }
    ]);
})(angular.module('app.paragraph'), _);

