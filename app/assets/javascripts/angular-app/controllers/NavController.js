beachesApp.controller('NavController', function($scope, $state, Auth, Message){
  $scope.signedIn = Auth.isAuthenticated;

  $scope.logout = function(){
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
    Message.success("Signed out successfully.")
    $state.go('home')
  });  
})