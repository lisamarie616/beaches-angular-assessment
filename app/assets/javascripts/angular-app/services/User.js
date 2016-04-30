beachesApp.factory('User', function($resource){
  var User = $resource('http://localhost:3000/api/v1/users/:id', {id: '@id'})
  return User;
})