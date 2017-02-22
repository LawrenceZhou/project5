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
    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));

  }]);