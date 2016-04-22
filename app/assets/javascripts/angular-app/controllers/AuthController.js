beachesApp.controller('AuthController', function($scope, $state, Auth, messageCenterService){
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      messageCenterService.add('success', 'Logged in successfully.', {status: messageCenterService.status.next})
      $state.go('home')
    }, function(response) {
      var error = response.data.error;
      messageCenterService.add('danger', error, {status: messageCenterService.status.unseen})
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      messageCenterService.add('success', 'Welcome! You have signed up successfully.', {status: messageCenterService.status.next})
      $state.go('home')
    }, function(response) {
      var errors = errorMessage(response.data)
      messageCenterService.add('danger', errors, {status: messageCenterService.status.unseen})
    });
  };

  var errorMessage = function(errorObj) {
    result = [];
    for (var key in errorObj.errors){
      result.push(key.charAt(0).toUpperCase() + key.slice(1) + " " + errorObj.errors[key])
    }
    return result.join(". ") + ".";
  };
});
