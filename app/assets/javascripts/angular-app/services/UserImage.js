beachesApp.factory('UserImage', function($resource){
  var UserImage = $resource('/api/v1/users/:user_id/images', {user_id: '@user_id'},
    {'update': { method: 'PUT' }
  });
  return UserImage;    
})