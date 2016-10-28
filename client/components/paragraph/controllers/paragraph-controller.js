'use strict';

app.controller('ParagraphCtl', ['$scope', 'ParagraphService',
    function($scope, ParagraphService) {
        var vm = this;
        vm.highlights = [];

        var paragraphs = ParagraphService.query(function() {
            vm.paragraphs = paragraphs;
        });
    }
]);
