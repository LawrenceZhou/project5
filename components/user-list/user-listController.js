'use strict';

cs142App.controller('UserListController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Users';
        //$scope.nameList = window.cs142models.userListModel();
        $scope.FetchModel("http://localhost:3000/user/list", function(model){
            var object = JSON.parse(model);
            $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.nameList = object;
            });
        });

        //console.log('window.cs142models.userListModel()', window.cs142models.userListModel());
    }]);

