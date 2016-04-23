beachesApp.controller('NavController', function($scope, $state, Auth, messageCenterService){
  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = function(){
    messageCenterService.markShown();
    messageCenterService.removeShown();
    Auth.logout();
  }

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {}
    messageCenterService.add('success', 'Logged out successfully.', {status: messageCenterService.status.next})
    $state.go('home')
  }); 

});