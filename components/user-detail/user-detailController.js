'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', 'updateToolbar', 
  function ($scope, $routeParams, updateToolbar) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    console.log('UserDetail of ', userId);
    //updateToolbar.update(userId);
    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));

  }]);