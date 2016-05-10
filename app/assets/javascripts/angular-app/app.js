var beachesApp = angular.module('app', ['ui.router', 'ngResource', 'templates', 'Devise', 'ui.bootstrap', 'ngMessages', 
  'ngFlash', 'truncate', 'ngFileUpload', 'jkuri.gallery', 'uiGmapgoogle-maps', 'App.filters'])

beachesApp.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyDbVuOSele_kwBq1IM2F32wyo_43_bIaE0',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
   });
});