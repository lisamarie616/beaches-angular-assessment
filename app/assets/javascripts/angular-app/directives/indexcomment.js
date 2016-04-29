beachesApp.directive('indexcomment', function(){
  return {
    restrict: 'E',
    templateUrl: 'comments/indexcomment.html',
    scope: {
      comment: "=",
      beach: "="
    },
    controller: function($scope, $state, $http, Auth, User, Message){
      Auth.currentUser()
        .then(function(user){
          $scope.current_user = user;
        });

      $scope.commentor = User.get({ id: $scope.comment.user_id })

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

      $scope.upvote = function(beach, comment){
        if (Auth.isAuthenticated()){
          return $http.delete('/api/v1/beaches/' + beach.id + '/comments/' + comment.id + '/downvote')
          .then(function(response){
            comment.score += 1;
            Message.success("Successfully upvoted")
          }, function(response){
            return $http.post('/api/v1/beaches/' + beach.id  + '/comments/' + comment.id + '/upvote')
            .then(function(response){
              comment.score +=1;
              Message.success("Successfully upvoted")
            }, function(response){
              console.log("error")
              Message.danger("You may only submit one vote per comment.")
            });
          });  
        } else {
          Message.danger("You must login or signup first.")
        }
      }

        $scope.downvote = function(beach, comment){
          if (Auth.isAuthenticated()){
            return $http.delete('/api/v1/beaches/' + beach.id + '/comments/' + comment.id + '/upvote')
            .then(function(response){
              comment.score -= 1;
              Message.success("Successfully downvoted")
            }, function(response){
              return $http.post('/api/v1/beaches/' + beach.id + '/comments/' + comment.id + '/downvote')
              .then(function(response){
                comment.score -=1;
                Message.success("Successfully downvoted")
              }, function(response){
                console.log("error")
                Message.danger("You may only submit one vote per comment.")
              });
            });  
          } else {
            Message.danger("You must login or signup first.")
          }
        }

    }
  }
});