beachesApp.controller('BeachController', function($state, $stateParams, Auth, Beach, Comment, Message){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beach = Beach.get({ id: $stateParams.id })

  ctrl.deleteBeach = function(beach){
    if (beach.user_id === ctrl.user.id){
      beach.$delete(function(){
        Message.success("Succesfully deleted")
        $state.go('home.beaches');
      });  
    } else {
      Message.danger("You are not authorized to perform that action.")
      $state.go('home.beaches');  
    }
  }

  ctrl.comment = new Comment();

  ctrl.addComment = function(user, beach){
    if (Auth.isAuthenticated()){
      ctrl.comment.user_id = user.id;
      ctrl.comment.beach_id = beach.id;
      ctrl.comment.$save(function(){
        Message.success("Succesfully created")
        $state.go($state.current, {}, {reload: true});
      });  
    } else {
      Message.danger("You must login or signup first.")
    }
  }

})