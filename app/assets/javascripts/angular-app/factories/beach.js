beachesApp.factory('Beach', function($resource){
  return $resource('http://localhost:3000/api/v1/beaches/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }, query: { isArray: false }
  });
});