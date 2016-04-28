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
      resolve: {
        security: ['$q', function($q){
          if(!Auth.isAuthenticated()){
            return $q.reject("Not Authorized");
          }
        }]
      }
    })
    .state('home.newBeach', {
      url: 'beaches/new',
      templateUrl: 'beaches/new.html',
      controller: 'NewBeachController as ctrl',
      resolve: {
        security: ['$q', function($q){
          if(!Auth.isAuthenticated()){
            return $q.reject("Not Authorized");
          }
        }]
      }
    })
    .state('home.beach', {
      url: 'beaches/:id',
      templateUrl: 'beaches/show.html',
      controller: 'BeachController as ctrl',
      resolve: {
        security: ['$q', function($q){
          if(!Auth.isAuthenticated()){
            return $q.reject("Not Authorized");
          }
        }]
      }
    })
    .state('home.editBeach', {
      url: 'beaches/:id/edit',
      templateUrl: 'beaches/edit.html',
      controller: 'EditBeachController as ctrl',
      resolve: {
        security: ['$q', function($q){
          if(!Auth.isAuthenticated()){
            return $q.reject("Not Authorized");
          }
        }]
      }
    });

  $urlRouterProvider.otherwise('/');
});

beachesApp.run(function($rootScope){
  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error){
    if(error === "Not Authorized"){
        $state.go("home");
    }
  })
});


