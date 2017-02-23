'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', 
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    var userObject = window.cs142models.userModel(userId);

    var firstName = userObject.first_name;
    var lastName = userObject.last_name;
    $scope.main.toolBar = firstName + " " + lastName;
    $scope.user = {};
    $scope.user.id = userId;
    $scope.user.name = firstName + " " + lastName;
    $scope.user.location = userObject.location;
    $scope.user.occupation = userObject.occupation;
    $scope.user.discription = userObject.discription;
    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));

  }]);