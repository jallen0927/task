'use strict';

(function (app) {
    app.controller('ParagraphCtl', ['$scope', 'ParagraphService',
        function($scope, ParagraphService) {
            var vm = this;
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
            };

            /**
             * Remove letters from result; If there is more than one record matched, it will remove all of them.
             * @param letter
             */
            vm.removeSound = function (letter) {
                vm.sounds = _.without(vm.sounds, _.findWhere(vm.sounds, {
                    code: letter.sound_code
                }));
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

            // var paragraphs = ParagraphService.query(function() {
            //     vm.paragraphs = paragraphs;
            // });

            //Mock up
            vm.paragraphs = [{"id":"1","content":"ex(s)pensive rings on thin fingers","words":[{"id":"1","paragraph":"1","paragraph_index":"1","content":"ex(s)pensive","letters":[{"id":"1","content":"e","sound":"1","word":"1","word_index":"1","sound_label":"vowel1","sound_code":"1"},{"id":"2","content":"x","sound":"8","word":"1","word_index":"2","sound_label":"k","sound_code":"-3"},{"id":"3","content":"(s)","sound":"13","word":"1","word_index":"3","sound_label":"s","sound_code":"-8"},{"id":"4","content":"p","sound":"11","word":"1","word_index":"4","sound_label":"p","sound_code":"-6"},{"id":"5","content":"e","sound":"2","word":"1","word_index":"5","sound_label":"vowel2","sound_code":"2"},{"id":"6","content":"n","sound":"9","word":"1","word_index":"6","sound_label":"n","sound_code":"-4"},{"id":"7","content":"s","sound":"13","word":"1","word_index":"7","sound_label":"s","sound_code":"-8"},{"id":"8","content":"i","sound":"3","word":"1","word_index":"8","sound_label":"vowel3","sound_code":"3"},{"id":"9","content":"ve","sound":"15","word":"1","word_index":"9","sound_label":"v","sound_code":"-10"}]},{"id":"2","paragraph":"1","paragraph_index":"2","content":"rings","letters":[{"id":"10","content":"r","sound":"12","word":"2","word_index":"1","sound_label":"r","sound_code":"-7"},{"id":"11","content":"i","sound":"3","word":"2","word_index":"2","sound_label":"vowel3","sound_code":"3"},{"id":"12","content":"ng","sound":"10","word":"2","word_index":"3","sound_label":"ng","sound_code":"-5"},{"id":"13","content":"s","sound":"16","word":"2","word_index":"4","sound_label":"z","sound_code":"-11"}]},{"id":"3","paragraph":"1","paragraph_index":"3","content":"on","letters":[{"id":"14","content":"o","sound":"5","word":"3","word_index":"1","sound_label":"vowel5","sound_code":"5"},{"id":"15","content":"n","sound":"9","word":"3","word_index":"2","sound_label":"n","sound_code":"-4"}]},{"id":"4","paragraph":"1","paragraph_index":"4","content":"thin","letters":[{"id":"16","content":"th","sound":"14","word":"4","word_index":"1","sound_label":"th","sound_code":"-9"},{"id":"17","content":"i","sound":"3","word":"4","word_index":"2","sound_label":"vowel3","sound_code":"3"},{"id":"18","content":"n","sound":"9","word":"4","word_index":"3","sound_label":"n","sound_code":"-4"}]},{"id":"5","paragraph":"1","paragraph_index":"5","content":"fingers","letters":[{"id":"19","content":"f","sound":"6","word":"5","word_index":"1","sound_label":"f","sound_code":"-1"},{"id":"20","content":"i","sound":"3","word":"5","word_index":"2","sound_label":"vowel3","sound_code":"3"},{"id":"22","content":"g","sound":"7","word":"5","word_index":"4","sound_label":"g","sound_code":"-2"},{"id":"23","content":"e","sound":"1","word":"5","word_index":"5","sound_label":"vowel1","sound_code":"1"},{"id":"24","content":"r","sound":"12","word":"5","word_index":"6","sound_label":"r","sound_code":"-7"},{"id":"25","content":"s","sound":"16","word":"5","word_index":"7","sound_label":"z","sound_code":"-11"},{"id":"21","content":"n","sound":"10","word":"5","word_index":"3","sound_label":"ng","sound_code":"-5"}]}]}];
        }
    ]);
})(angular.module('app.paragraph'));

