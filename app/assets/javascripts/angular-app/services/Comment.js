beachesApp.factory('Comment', function($resource){
  var Comment = $resource('/api/v1/beaches/:beach_id/comments', {beach_id: '@beach_id'},
    {'update': { method: 'PUT' }
  });
  return Comment;    
})