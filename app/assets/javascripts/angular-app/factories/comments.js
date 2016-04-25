beachesApp.factory('Comments', function($resource){
  var Comments = $resource('http://localhost:3000/api/v1/beaches/:beach_id/comments', {beach_id: '@beach_id'},
    {'update': { method: 'PUT' }
  });
  return Comments;    
})