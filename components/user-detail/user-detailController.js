'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', 
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */

    var userId = $routeParams.userId;
    console.log('UserDetail of ', userId);
    var firstName = window.cs142models.userModel(userId).first_name;
    var lastName = window.cs142models.userModel(userId).last_name;
    $scope.main.toolBar = firstName + " " + lastName;
    $scope.user = {};
    $scope.user.id = userId;
    $scope.user.name = firstName + " " + lastName;
    $scope.user.location = window.cs142models.userModel(userId).location;
    $scope.user.occupation = window.cs142models.userModel(userId).occupation;
    $scope.user.discription = window.cs142models.userModel(userId).discription;
    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));

  }]);