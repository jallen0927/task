'use strict';

/**
 * Main entry
 */

(function(angular) {
    angular.module('app', ['app.paragraph'])
        .constant('API_URL', 'http://shawn-lin.com/server/index.php');
})(angular);
