beachesApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    })
    .state('home.login', {
      url: 'login',
      templateUrl: 'auth/login.html',
      controller: 'AuthController',
      onEnter: function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        });
      }
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'auth/register.html',
      controller: 'AuthController',
      onEnter: function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        });
      }
    })

  $urlRouterProvider.otherwise('/');
});