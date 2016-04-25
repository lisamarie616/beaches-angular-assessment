beachesApp.directive('comment', function(){
  return {
    restrict: 'E',
    templateUrl: 'comments/comment.html',
    scope: {
      comment: "=",
    },
    controller: function($scope, User){
      $scope.user = User.get({ id: $scope.comment.user_id })
    }
  }
});