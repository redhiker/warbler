var slackControllers = angular.module('slackControllers', []);

slackControllers.controller('LoginCtrl', function ($scope,$http,$location) {

    $scope.validateLogin = function() {

        $http.get('/slack/logon/:'+$scope.inputName+'/:'+$scope.inputPassword)
        .success(function(data) {
            
           if (data[0].includes('SUCCESS')) {
               //$location.path("/slack/:"+$scope.inputName);
               location.href = "/slack/messages";
           } else {
               
           }
        });    
    };
});

slackControllers.controller('UserMessagesCtrl', function ($scope,$http) {

    $scope.displayMessages = function(x) {

        console.log('in user messages controller....'+x);

    };
    
});

