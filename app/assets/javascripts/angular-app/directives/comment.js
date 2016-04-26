beachesApp.directive('comment', function(){
  return {
    restrict: 'E',
    templateUrl: 'comments/comment.html',
    scope: {
      comment: "=",
      beach: "="
    },
    controller: function($scope, $state, $http, Auth, messageCenterService, User){
      Auth.currentUser()
        .then(function(user){
          $scope.current_user = user;
        });

      $scope.commentor = User.get({ id: $scope.comment.user_id })

      $scope.deleteComment = function(beach_id, comment_id, user_id){
        if ($scope.current_user.id === user_id){
          return $http.delete('/api/v1/beaches/' + beach_id + '/comments/' + comment_id)
            .success(function(data, response){
              $state.go($state.current, {}, {reload: true});
            })
        } else {
          messageCenterService.add('danger', 'You are not authorized to perform that action.', {status: messageCenterService.status.unseen})
          $state.go($state.current, {}, {reload: true});
        }    
      }

      $scope.upvote = function(beach, comment){
        return $http.delete('/api/v1/beaches/' + beach.id + '/comments/' + comment.id + '/downvote')
          .then(function(response){
            comment.score += 1;
            // insert success message here
          }, function(response){
            return $http.post('/api/v1/beaches/' + beach.id  + '/comments/' + comment.id + '/upvote')
            .then(function(response){
              comment.score +=1;
              //insert success message here
            }, function(response){
              console.log("error")
              // insert error message here
            });
          });
      }

        $scope.downvote = function(beach, comment){
          return $http.delete('/api/v1/beaches/' + beach.id + '/comments/' + comment.id + '/upvote')
            .then(function(response){
              comment.score -= 1;
              // insert success message here
            }, function(response){
              return $http.post('/api/v1/beaches/' + beach.id + '/comments/' + comment.id + '/downvote')
              .then(function(response){
                comment.score -=1;
                //insert success message here
              }, function(response){
                console.log("error")
                // insert error message here
              });
            });
        }

    }
  }
});