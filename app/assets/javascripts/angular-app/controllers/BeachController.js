beachesApp.controller('BeachController', function(Beach, $state, $stateParams){
  var ctrl = this;
  ctrl.beach = Beach.get({ id: $stateParams.id })

  ctrl.deleteBeach = function(beach){
    beach.$delete(function(){
      $state.go('home.beaches');
    });
  };
})