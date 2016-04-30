beachesApp.factory('Comment', function($resource){
  var Comment = $resource('http://localhost:3000/api/v1/beaches/:beach_id/comments', {beach_id: '@beach_id'},
    {'update': { method: 'PUT' }
  });
  return Comment;    
})