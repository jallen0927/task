'use strict';

(function (angular) {
    var paragraph = angular.module('paragraph', ['ngResource']);

    paragraph.constant('API_URL', '/server/index.php');
})(angular);
