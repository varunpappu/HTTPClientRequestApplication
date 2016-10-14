var app = angular.module('myApp', ['ngResource']);

// Create a resource factory to access products table from database 
app.factory('Customer', function($resource) {
    return $resource('/api/customers/:id', {
        id: '@_id'
    }, {
        update: { // We need to define this method manually as it is not provided with ng-resource
            method: 'PUT'
        }
    });
});
