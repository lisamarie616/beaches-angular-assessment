beachesApp.controller('AuthController', function($scope, $state, Auth, Message){
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      Message.success("Signed in successfully.")
      $state.go('home.beaches')
    }, function(response) {
      Message.danger(response.data.error);
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      Message.success("Welcome! You have signed up successfully.");
      $state.go('home.beaches')
    }, function(response) {
      var errors = Message.processErrors(response.data.errors)
      Message.danger(errors)
    });
  };
})