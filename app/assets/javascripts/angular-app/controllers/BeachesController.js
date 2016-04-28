beachesApp.controller('BeachesController', function($http, Auth, Beach, Message){
  var ctrl = this;

  ctrl.beaches = Beach.query();

  ctrl.checkboxModel = {
    restrooms: false,
    showers: false,
    water_fountains: false,
    food_onsite: false,
    bar_onsite: false,
    shopping_onsite: false,
    pier: false,
    firepits: false,
    dogs_allowed: false
  }

  ctrl.upvote = function(beach){
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

  ctrl.downvote = function(beach){
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

})