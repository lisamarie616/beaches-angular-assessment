beachesApp.controller('BeachesController', function(Beach){
  var ctrl = this;
  Beach.query( {}, function(response) {
    ctrl.beaches = response.beaches;
  });

});