beachesApp.service('Message', function (Flash) {

    this.success = function(message){
      Flash.create('success', message, 3000)
    }

    this.info = function(message){
      Flash.create('info', message, 3000)
    }

    this.warning = function(message){
      Flash.create('warning', message, 3000)
    }

    this.danger = function(message){
      Flash.create('danger', message, 3000)
    }

    this.processErrors = function(errorObj){
      var error = [];
      for (var prop in errorObj){
        error.push(prop.charAt(0).toUpperCase() + prop.slice(1) + " " + errorObj[prop])
      }
      return error.join(". ") + "."
    }

})