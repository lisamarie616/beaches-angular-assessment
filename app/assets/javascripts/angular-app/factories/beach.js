beachesApp.factory('Beach', function($resource){
  var Beach = $resource('http://localhost:3000/api/v1/beaches/:id.json', {id: '@id'},
    {'update': { method: 'PUT' }
  });
  return Beach;    
})