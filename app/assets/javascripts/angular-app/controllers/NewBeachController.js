beachesApp.controller('NewBeachController', function(Beach, $stateParams, $state){
  var ctrl = this;
  ctrl.beach = new Beach();

  ctrl.addBeach = function(){
    ctrl.beach.$save(function(){
      $state.go('home.beaches');
    });
  };    
})