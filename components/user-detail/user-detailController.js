'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', 
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    //$scope.user = window.cs142models.userModel(userId);
    var url = "http://localhost:3000/user/" + userId;
    console.log(url);
    $scope.FetchModel(url, function(model){
            var object = JSON.parse(model);
            $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.user = object;
            console.log($scope.user);
            });
        });

    var firstName = $scope.user.first_name;
    var lastName = $scope.user.last_name;
    $scope.main.toolBar = firstName + " " + lastName;
    $scope.user.name = firstName + " " + lastName;
    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));

  }]);