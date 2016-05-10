beachesApp.controller('BeachController', function($state, $stateParams, $timeout, $http, Auth, Upload, Beach, Comment, Image, Message){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beach = Beach.get({ id: $stateParams.id })
  ctrl.images = Image.query({ beach_id: $stateParams.id })

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

  ctrl.upload = function (files) {
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      ctrl.upload = Upload.upload({
        url: '/api/v1/beaches/' + ctrl.beach.id + '/images',
        method: 'POST',
        headers: { 'Content-Type': false },
        fields: {
          'image[image]': file,
          'image[user_id]': ctrl.user.id
        },
        file: file,
        sendFieldsAs: 'json'
      }).then(function (resp) {
        $state.go($state.current, {}, {reload: true});
      }, function (resp) {
        Message.danger("Error. Please try again.")
      });
    }
  }

  ctrl.logVisited = function(){
    $http.post('/api/v1/beaches/' + ctrl.beach.id + '/visits').then(function(){
      $state.go($state.current, {}, {reload: true});
    })
  }

  ctrl.logNotVisited = function(){
    $http.delete('/api/v1/beaches/' + ctrl.beach.id + '/visits').then(function(){
      $state.go($state.current, {}, {reload: true});
    })
  }

  ctrl.checkVisited = function(visitors){
    var check;
    visitors.forEach(function(v){
      if (v.id == Auth._currentUser.id){
        check = true;
      }
    })
    return check;
  }

})

