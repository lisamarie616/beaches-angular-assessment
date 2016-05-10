beachesApp.controller('MapsController', function($state, $stateParams, $http, $rootScope, uiGmapGoogleMapApi, Message){
  var ctrl = this;
  ctrl.stateIsLoading = true;

  ctrl.defaultLat = 44.2126995,
  ctrl.defaultLong = -100.2471641,
  ctrl.zoomA = 6;
  ctrl.zoomB = 6;

  ctrl.visitedList = [];
  ctrl.notVisitedList = [];

  navigator.geolocation.getCurrentPosition(function(pos) {
    ctrl.userLat = pos.coords.latitude;
    ctrl.userLong = pos.coords.longitude;
    ctrl.stateIsLoading = false;

    uiGmapGoogleMapApi.then(function(maps) {

    ctrl.mapA = { center: { latitude: ctrl.userLat || ctrl.defaultLat, longitude: ctrl.userLong || ctrl.defaultLong }, zoom: ctrl.zoomA };

    $http.get('/api/v1/users/' + $stateParams.id + '/visited')
      .success(function(data, response){
        data.forEach(function(beach){
          var address = beach.address + " " + beach.city + " " + beach.state + " " + beach.zip
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode( { "address": address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
              var mapData = {};
              mapData["id"] = beach.id
              mapData["options"] = {labelContent: beach.name}
              mapData["coords"] = {}
              mapData["coords"]["latitude"] = results[0].geometry.location.lat()
              mapData["coords"]["longitude"] = results[0].geometry.location.lng()
              ctrl.visitedList.push(mapData);
            }
          });
        })
      })

      ctrl.mapB = { center: { latitude: ctrl.userLat || ctrl.defaultLat, longitude: ctrl.userLong || ctrl.defaultLong }, zoom: ctrl.zoomB };

      $http.get('/api/v1/users/' + $stateParams.id + '/not_visited')
        .success(function(data, response){
          data.forEach(function(beach){
            var address = beach.address + " " + beach.city + " " + beach.state + " " + beach.zip
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { "address": address }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                var mapData = {};
                mapData["id"] = beach.id
                mapData["options"] = {labelContent: beach.name}
                mapData["coords"] = {}
                mapData["coords"]["latitude"] = results[0].geometry.location.lat()
                mapData["coords"]["longitude"] = results[0].geometry.location.lng()
                ctrl.notVisitedList.push(mapData);
              }
            });
          })
        })
      });
    });
})