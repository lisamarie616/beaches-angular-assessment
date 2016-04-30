beachesApp.service('Vote', function ($http, Auth, Message) {

  this.upvoteBeach = function(beach){
    if (Auth.isAuthenticated()){
      return $http.delete('/api/v1/beaches/' + beach.id + '/downvote')
      .then(function(response){
        beach.score += 1;
        Message.success("Successfully upvoted")
      }, function(response){
        return $http.post('/api/v1/beaches/' + beach.id + '/upvote')
        .then(function(response){
          beach.score +=1;
          Message.success("Successfully upvoted")
        }, function(response){
          Message.danger("You may only submit one vote per beach.")
        });
      });  
    } else {
      Message.danger("You must login or signup first.")
    }
  }

  this.downvoteBeach = function(beach){
    if (Auth.isAuthenticated()){
      return $http.delete('/api/v1/beaches/' + beach.id + '/upvote')
      .then(function(response){
        beach.score -= 1;
        Message.success("Successfully downvoted")
      }, function(response){
        return $http.post('/api/v1/beaches/' + beach.id + '/downvote')
        .then(function(response){
          beach.score -=1;
          Message.success("Successfully downvoted")
        }, function(response){
          Message.danger("You may only submit one vote per beach.")
        });
      });  
    } else {
      Message.danger("You must login or signup first.")
    }
  }

  this.upvoteComment = function(beach, comment){
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

    this.downvoteComment = function(beach, comment){
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

})