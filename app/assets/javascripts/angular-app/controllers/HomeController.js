beachesApp.controller('HomeController', function($state, Auth){
  this.signedIn = Auth.isAuthenticated;
  this.$state = $state;

  this.home = function(){
    return $state.current.name === 'home';
  }

})