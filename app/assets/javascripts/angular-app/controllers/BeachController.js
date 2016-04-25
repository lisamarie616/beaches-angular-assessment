beachesApp.controller('BeachController', function($state, $stateParams, Beach, Auth, messageCenterService){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beach = Beach.get({ id: $stateParams.id })

  ctrl.deleteBeach = function(beach){
    if (beach.user_id === ctrl.user.id){
      beach.$delete(function(){
        messageCenterService.add('success', 'Beach deleted', {status: messageCenterService.status.next})
        $state.go('home.beaches');
      });  
    } else {
      messageCenterService.add('danger', 'You are not authorized to perform that action.', {status: messageCenterService.status.next})
      $state.go('home.beaches');
    }
    
  };
})