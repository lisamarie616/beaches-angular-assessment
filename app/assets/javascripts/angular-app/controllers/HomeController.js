beachesApp.controller('HomeController', function($state, Auth){
  this.$state = $state;
  this.signedIn = Auth.isAuthenticated;

  this.home = function(){
    return $state.current.name === 'home';
  }

})