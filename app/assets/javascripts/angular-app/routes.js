beachesApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    })

  $urlRouterProvider.otherwise('/');
});