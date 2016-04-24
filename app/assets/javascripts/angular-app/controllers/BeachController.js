beachesApp.controller('BeachController', function(Beach, $stateParams){
  var ctrl = this;
  ctrl.beach = Beach.get({ id: $stateParams.id })  
})