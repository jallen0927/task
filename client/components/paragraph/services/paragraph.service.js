'use strict';

(function(app) {
    app.factory('ParagraphService', ['$resource', 'API_URL',
        function($resource, API_URL) {
            return $resource(API_URL, {

            });
        }
    ]);
})(angular.module('app'));