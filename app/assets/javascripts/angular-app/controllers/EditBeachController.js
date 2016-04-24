beachesApp.controller('EditBeachController', function(Beach, $state, $stateParams){
  var ctrl = this;

  ctrl.beach = Beach.get({ id: $stateParams.id });

  ctrl.updateBeach = function(){
    ctrl.beach.$update(function(response){
      $state.go('home.beach', {id: response.id});
    });
  };    
})