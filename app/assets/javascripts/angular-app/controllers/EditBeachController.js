beachesApp.controller('EditBeachController', function($state, $stateParams, Auth, Beach, Message){
  var ctrl = this;

  ctrl.beach = Beach.get({ id: $stateParams.id });

  ctrl.updateBeach = function(){
    if (Auth.isAuthenticated()){
      ctrl.beach.$update(function(response){
        $state.go('home.beach', {id: response.id});
        Message.success("Successfully updated");
      }, function(err){
        Message.danger(err.data.errors)
      });  
    } else {
      Message.danger("You must login or signup first.")
    }
  };    
})