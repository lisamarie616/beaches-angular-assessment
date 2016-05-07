beachesApp.factory('UserImage', function($resource){
  var UserImage = $resource('http://localhost:3000/api/v1/users/:user_id/images', {user_id: '@user_id'},
    {'update': { method: 'PUT' }
  });
  return UserImage;    
})