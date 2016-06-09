beachesApp.factory('Beach', function($resource){
  var Beach = $resource('/api/v1/beaches/:id', {id: '@id'},
    {'update': { method: 'PUT' }
  });
  return Beach;    
})