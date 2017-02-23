'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    console.log('UserPhoto of ', $routeParams.userId);
    var firstName = window.cs142models.userModel(userId).first_name;
    var lastName = window.cs142models.userModel(userId).last_name;
    $scope.main.toolBar = "Photos of " + firstName + " " + lastName;

    //$scope.photos = {};
    $scope.photos = window.cs142models.photoOfUserModel(userId));

    console.log('window.cs142models.photoOfUserModel($routeParams.userId)',
       window.cs142models.photoOfUserModel(userId));

  }]);
