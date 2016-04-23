beachesApp.controller('BeachController', function(Beach, $stateParams){
  var ctrl = this;
  Beach.get({ id: $stateParams.id }, function(response) {
    ctrl.beach = response.beach
  });
});