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

cs142App.controller('MainController', ['$scope', '$routeParams', 
    function ($scope, updateToolbar, $routeParams) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.toolBar = $route.current.params;
    }]);

