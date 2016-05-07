beachesApp.directive('comment', function(){
  return {
    restrict: 'E',
    templateUrl: 'comments/comment.html',
    scope: {
      comment: "=",
      beach: "="
    },
    controller: function($scope, $state, $http, Auth, Message, Vote){
      Auth.currentUser()
        .then(function(user){
          $scope.current_user = user;
        });

      $scope.deleteComment = function(beach_id, comment_id, user_id){
        if ($scope.current_user.id === user_id){
          return $http.delete('/api/v1/beaches/' + beach_id + '/comments/' + comment_id)
            .success(function(data, response){
              Message.success("Succesfully deleted")
              $state.go($state.current, {}, {reload: true});
            })
        } else {
          Message.danger("You are not authorized to perform that action.")
          $state.go($state.current, {}, {reload: true});
        }    
      }

      $scope.upvoteComment = Vote.upvoteComment;
      $scope.downvoteComment = Vote.downvoteComment;
    }
  }
});