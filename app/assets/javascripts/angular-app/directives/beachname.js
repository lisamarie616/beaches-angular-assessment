beachesApp.directive('beachname', function(){
  return {
    restrict: 'E',
    templateUrl: 'beaches/beachname.html',
    scope: {
      image: "="
    },
    controller: function($scope, Beach){
      $scope.beach = Beach.get({ id: $scope.image.beach_id })
    }
  }
});