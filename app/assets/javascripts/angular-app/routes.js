beachesApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as ctrl'
    })
    .state('home.login', {
      url: 'login',
      templateUrl: 'auth/login.html',
      controller: 'AuthController',
      onEnter: function($state, Auth) {
        if (Auth._currentUser) {
          Auth.currentUser().then(function (){
            $state.go('home.beaches');
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
            $state.go('home.beaches');
          });
        }
      }
    })
    .state('home.beaches', {
      url: 'beaches',
      templateUrl: 'beaches/index.html',
      controller: 'BeachesController as ctrl',
      onEnter: function($state, Auth) {
        if (!Auth._currentUser) {
          $state.go('home');
        }
      }
    })
    .state('home.newBeach', {
      url: 'beaches/new',
      templateUrl: 'beaches/new.html',
      controller: 'NewBeachController as ctrl',
      onEnter: function($state, Auth) {
        if (!Auth._currentUser) {
          $state.go('home');
        }
      }
    })
    .state('home.beach', {
      url: 'beaches/:id',
      templateUrl: 'beaches/show.html',
      controller: 'BeachController as ctrl',
      onEnter: function($state, Auth) {
        if (!Auth._currentUser) {
          $state.go('home');
        }
      }
    })
    .state('home.editBeach', {
      url: 'beaches/:id/edit',
      templateUrl: 'beaches/edit.html',
      controller: 'EditBeachController as ctrl',
      onEnter: function($state, Auth) {
        if (!Auth._currentUser) {
          $state.go('home');
        }
      }
    });

  $urlRouterProvider.otherwise('/');
});


