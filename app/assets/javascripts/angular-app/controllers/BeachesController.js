beachesApp.controller('BeachesController', function($http, Auth, Beach, Message, Vote){
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

  ctrl.upvoteBeach = Vote.upvoteBeach;
  ctrl.downvoteBeach = Vote.downvoteBeach;
})