var slackApp = angular.module('slackApp', ['ngRoute', 'slackControllers']);

slackApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
        }).
        when('/slack/messages', {
        templateUrl: 'user-messages.html',
        controller: 'UserMessagesCtrl'
        }).
        otherwise({
        redirectTo: '/'
        });
});

slackApp.factory('displayList', function($http){

    var cachedData;

});
