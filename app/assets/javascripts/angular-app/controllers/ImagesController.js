beachesApp.controller('ImagesController', function($state, $http, Auth, UserImage,Message){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.images = UserImage.query({ user_id: Auth._currentUser.id })

  ctrl.deleteImage = function(image){
    if (image.user_id === ctrl.user.id.toString()){
      return $http.delete('/api/v1/users/' + ctrl.user.id + '/images/' + image.id)
        .success(function(data, response){
          Message.success("Succesfully deleted")
          $state.go($state.current, {}, {reload: true});
        })
    } else {
      Message.danger("You are not authorized to perform that action.")
      $state.go($state.current, {}, {reload: true});
    }    
  }

})