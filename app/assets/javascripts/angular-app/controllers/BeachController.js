beachesApp.controller('BeachController', function($state, $stateParams, Beach){
  var ctrl = this;
  ctrl.beach = Beach.get({ id: $stateParams.id })

  ctrl.deleteBeach = function(beach){
    beach.$delete(function(){
      $state.go('home.beaches');
    });
  };
})