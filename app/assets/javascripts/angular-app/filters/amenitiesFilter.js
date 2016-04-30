angular.module('App.filters', [])
.filter('amenitiesFilter', function(){
  return function(beaches, amenityChoices){
    var filteredOut = [];

    for (var key in amenityChoices){
      if (amenityChoices[key] === true){
        for (var i = 0; i < beaches.length; i++){
          var beach = beaches[i];
          
          if (beach[key] !== true){
            filteredOut.push(beach);
          }
        }
      }
    }

    var filtered = [];

    for (var i = 0; i < beaches.length; i++){
      var beach = beaches[i];
      if (!filteredOut.includes(beach)){
        filtered.push(beach);
      }
    }

    return filtered;
    
  }
})