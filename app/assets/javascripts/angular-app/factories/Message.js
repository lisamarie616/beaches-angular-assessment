beachesApp.factory('Message', function (Flash) {

    var methods = {};

    methods.success = function(message){
      Flash.create('success', message, 4000)
    }

    methods.info = function(message){
      Flash.create('info', message, 4000)
    }

    methods.warning = function(message){
      Flash.create('warning', message, 4000)
    }

    methods.danger = function(message){
      Flash.create('danger', message, 4000)
    }

    methods.processErrors = function(errorObj){
      var error = [];
      for (var prop in errorObj){
        error.push(prop.charAt(0).toUpperCase() + prop.slice(1) + " " + errorObj[prop])
      }
      return error.join(". ") + "."
    }

    return methods;
})