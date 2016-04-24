beachesApp.controller('NewBeachController', function($stateParams, $state, Beach, Auth){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beach = new Beach();

  ctrl.addBeach = function(user){
    ctrl.beach.user_id = user.id;
    ctrl.beach.$save(function(){
      $state.go('home.beaches');
    });
  };    
})