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
    };

    this.get = function() {
        return this.toolBar;
    };

});

cs142App.controller('MainController', ['$scope', updateToolbar
    function ($scope, updateToolbar) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.toolbar = updateToolbar.get;
    }]);


