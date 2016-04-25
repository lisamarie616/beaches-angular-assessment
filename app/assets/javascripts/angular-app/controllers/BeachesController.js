beachesApp.controller('BeachesController', function(Auth, Beach){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beaches = Beach.query();

})