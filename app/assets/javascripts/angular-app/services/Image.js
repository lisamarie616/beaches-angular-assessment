beachesApp.factory('Image', function($resource){
  var Image = $resource('/api/v1/beaches/:beach_id/images', {beach_id: '@beach_id'},
    {'update': { method: 'PUT' }
  });
  return Image;    
})