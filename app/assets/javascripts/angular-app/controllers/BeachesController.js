beachesApp.controller('BeachesController', function($http, Auth, Beach){
  var ctrl = this;

  Auth.currentUser()
    .then(function(user){
      ctrl.user = user;
    });

  ctrl.beaches = Beach.query();

  ctrl.upvote = function(beach){
    return $http.delete('/api/v1/beaches/' + beach.id + '/downvote')
      .then(function(response){
        beach.score += 1;
        // insert success message here
      }, function(response){
        return $http.post('/api/v1/beaches/' + beach.id + '/upvote')
        .then(function(response){
          beach.score +=1;
          //insert success message here
        }, function(response){
          console.log("error")
          // insert error message here
        });
      });
  }

  ctrl.downvote = function(beach){
    return $http.delete('/api/v1/beaches/' + beach.id + '/upvote')
      .then(function(response){
        beach.score -= 1;
        // insert success message here
      }, function(response){
        return $http.post('/api/v1/beaches/' + beach.id + '/downvote')
        .then(function(response){
          beach.score -=1;
          //insert success message here
        }, function(response){
          console.log("error")
          // insert error message here
        });
      });
  }

})