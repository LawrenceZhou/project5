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
            when('/photos/:userId/:photoId', {
                templateUrl: 'components/photos-view/photos-viewTemplate.html',
                controller: 'ViewPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$route', '$location'
    function ($scope, $route, $location) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.toolBar = '';
        $scope.checked = 0;

         /*
      * FetchModel - Fetch a model from the web server.
      *   url - string - The URL to issue the GET request.
      *   doneCallback - function - called with argument (model) when the
      *                  the GET request is done. The argument model is the
      *                  objectcontaining the model. model is undefined in 
      *                  the error case.
      */

    $scope.changeView = function() {
        console.log($route.current.params.length);
        if ($route.current.params.length === undefined){
            console.log("1");
        }else if($location.path().substring(0, 6) === "/users") {
            console.log("123"+$location.path());
            if($scope.checked) {
        $scope.FetchModel("http://localhost:3000/photosOfUser/" + $scope.userId, function(model){
        var object = JSON.parse(model);
        $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.photos = object;
            console.log($scope.photos);
            $scope.link ="#/photos/" + userId + "/"+ $scope.photos[0]._id;
        });
    });
    }else {
        $scope.link = "#/photos/" + $scope.userId;
    }
        }
        /*if($scope.checked){
        //window.location='https://www.yousendit.com/dropbox?dropbox=mydomain';
            console.log("enabled!");
        }else{
            console.log("disabled!");
        }
        callBack();*/
    };

        $scope.FetchModel = function(url, doneCallback) {
            var  xhrHandler = function() {
                //Don’t do anything if not final state
                if (this.readyState!== 4){ 
                    return; 
                }
                //Final State but status not OK
                if (this.status !== 200) {
                return;
                }
                var model = this.responseText;
                doneCallback(model);
            };

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = xhrHandler;
            xhr.open("GET", url);
            xhr.send();
        };

        $scope.FetchModel("http://localhost:3000/test/info", function(model){
            var object = JSON.parse(model);
            $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.main.version = object.__v;
            });
        });
             
    }]);
