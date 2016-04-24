beachesApp.controller('BeachesController', function(Beach){
  var ctrl = this;
  ctrl.beaches = Beach.query();  
})