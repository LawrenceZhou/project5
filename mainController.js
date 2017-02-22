'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.service('updateToolbar', function() {
    this.toolBar = '';
    this.update = function(status){
        this.toolBar = status;
        console.log(this.toolBar);
    };

    this.get = function() {
        console.log(this.toolBar);
        return this.toolBar;
    };

});

cs142App.controller('MainController', ['$scope', '$route', 
    function ($scope, $route) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.mode = "";
        if($route.current.hasOwnProperty('templateUrl')){
            $scope.main.mode = $route.current.templateUrl;
        }
        $scope.main.toolBar = "";
        if($scope.main.mode === "components/user-list/user-listTemplate.html") {
            var userId = $route.current.params._id;
             $scope.main.toolBar = window.cs142models.userModel(userId).first_name +" " + window.cs142models.userModel(userId).last_name;
           
        }
        if($scope.main.mode === "components/user-photos/user-photosTemplate.html") {
             var userId = $route.current.params._id;
             $scope.main.toolBar = "Photos of " + window.cs142models.userModel(userId).first_name +" " + window.cs142models.userModel(userId).last_name;

        }
    }]);

