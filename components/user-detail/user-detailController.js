'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', 
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    $scope.user = window.cs142models.userModel(userId);
    //$scope.FetchModel("http://localhost:3000/user/{{userId}}", function(model){
    //        var object = JSON.parse(model);
    //        $scope.$apply(function () {
    //        // Put your code that updates any $scope variables here
    //        $var userObject = object;
    //        });
    //    });

    var firstName = $scope.user.first_name;
    var lastName = $scope.user.last_name;
    $scope.main.toolBar = firstName + " " + lastName;
    //$scope.user = {};
    //$scope.user.id = userId;
    $scope.user.name = firstName + " " + lastName;
    //$scope.user.location = userObject.location;
    //$scope.user.occupation = userObject.occupation;
    //$scope.user.discription = userObject.discription;
    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));

  }]);