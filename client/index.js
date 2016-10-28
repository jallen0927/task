'use strict';

var app = angular.module('app', ['ngResource']);

app.constant('API_URL', '/server/index.php');

app.controller('ParagraphCtl', ['$scope', 'ParagraphService',
    function($scope, ParagraphService) {
        var vm = this;
        vm.highlights = [];

        var paragraphs = ParagraphService.query(function() {
            vm.paragraphs = paragraphs;
        });
    }
]);