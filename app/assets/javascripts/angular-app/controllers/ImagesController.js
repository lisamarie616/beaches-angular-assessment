beachesApp.controller('ImagesController', function($state, $stateParams, $http, UserImage, Message){
  var ctrl = this;

  ctrl.images = UserImage.query({ user_id: $stateParams.id })

  ctrl.deleteImage = function(image){
    if (image.user_id === $stateParams.id.toString()){
      return $http.delete('/api/v1/users/' + $stateParams.id + '/images/' + image.id)
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