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
        if (Auth._currentUser) {
          Auth.currentUser().then(function (){
            $state.go('home');
          });
        }
      }
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'auth/register.html',
      controller: 'AuthController',
      onEnter: function($state, Auth) {
        if (Auth._currentUser) {
          Auth.currentUser().then(function (){
            $state.go('home');
          });
        }
      }
    })
    .state('home.beaches', {
      url: 'beaches',
      templateUrl: 'beaches/index.html',
      controller: 'BeachesController as index'
    })
    .state('home.beach', {
      url: 'beach/:id',
      templateUrl: 'beaches/show.html',
      controller: 'BeachController as show'
    })

  $urlRouterProvider.otherwise('/');
});