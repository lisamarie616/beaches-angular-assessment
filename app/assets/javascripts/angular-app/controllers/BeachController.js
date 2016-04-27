beachesApp.controller('BeachController', function($state, $stateParams, Auth, Beach, Comment){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beach = Beach.get({ id: $stateParams.id })

  ctrl.deleteBeach = function(beach){
    if (beach.user_id === ctrl.user.id){
      beach.$delete(function(){
        //success message here
        $state.go('home.beaches');
      });  
    } else {
      //error message here
      $state.go('home.beaches');  
    }
  }

  ctrl.comment = new Comment();

  ctrl.addComment = function(user, beach){
    ctrl.comment.user_id = user.id;
    ctrl.comment.beach_id = beach.id;
    ctrl.comment.$save(function(){
      $state.go($state.current, {}, {reload: true});
    });
  }

})