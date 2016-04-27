beachesApp.controller('AuthController', function($scope, $state, Auth){
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      //success message here
      $state.go('home.beaches')
    }, function(response) {
      var error = response.data.error;
      //error message here
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      //success message here
      $state.go('home')
    }, function(response) {
      var errors = errorMessage(response.data)
      //error message here
    });
  };
})