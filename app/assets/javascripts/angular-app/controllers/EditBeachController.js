beachesApp.controller('EditBeachController', function($state, $stateParams, Beach, Message){
  var ctrl = this;

  ctrl.beach = Beach.get({ id: $stateParams.id });

  ctrl.updateBeach = function(){
    ctrl.beach.$update(function(response){
      $state.go('home.beach', {id: response.id});
      Message.success("Successfully updated");
    }, function(err){
      Message.danger(err.data.errors)
    });
  };    
})