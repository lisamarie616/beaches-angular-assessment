beachesApp.controller('NewBeachController', function($stateParams, $state, Auth, Beach, Message){
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
      Message.success("Successfully created");
    }, function(err){
      Message.danger(err.data.errors)
    });
  };    
})