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

cs142App.controller('MainController', ['$scope', 
    function ($scope) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.toolBar = '';
        $scope.main.version = '';

         /*
      * FetchModel - Fetch a model from the web server.
      *   url - string - The URL to issue the GET request.
      *   doneCallback - function - called with argument (model) when the
      *                  the GET request is done. The argument model is the
      *                  objectcontaining the model. model is undefined in 
      *                  the error case.
      */
     $scope.FetchModel = function(url, doneCallback) {
        var xhr = new XMLHttpRequest();
        var model;
        xhr.onreadystatechange = xhrHandler;
        xhr.open("GET", url);
        xhr.send();

     function xhrHandler() {
        console.log(this.readyState, this.status);
  //Don’t do anything if not final state
 if (this.readyState!== 4){ 
    return; 
 }
 //Final State but status not OK
 if (this.status !== 200) {
    return;
 }
model = this.responseText;
        console.log(model);
        doneCallback(model);
     };
 }

    $scope.FetchModel("http://localhost:3000/test/info", function(model){
        var object = JSON.parse(model);
        console.log(object);
        $scope.$apply(function () {
        // Put your code that updates any $scope variables here
        $scope.main.version = object.__v;
        });
    });


     
    }]);

