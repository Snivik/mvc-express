/*
* Bootstrap that
*
*/
var controllers = requireall('controllers');

module.exports = {
  module_name: 'controllers binder',

  mapRoute: function(path, route){

    // Check if we are dealing with object
    if (typeof route != 'object') {
      return;
    }

    // Check if we have minimum set of requirements
    if (!route.type || !route.method){
      console.log(path+' doesn\'t have required properties type and/or method');
    }


    // Now let's split up the controller part
    var method_parts = route.method.split(/\s*\.\s*/);
    var method = controllers;

    for (var i=0;i<method_parts.length;i++){
      var method_name = method_parts[i];

      // Check if we are still within the object
      if (typeof method == 'object'){
        // Check if our current 'method' has the next level
        if (method[method_name]) method = method[method_name];
        else {
          console.log(method_name+' doesn\'t exist');
          break;
        }
      }
    }

    // Check if we reached a function
    if (typeof method == 'function'){

      // Assign proper app method
      app[route.type.toLowerCase()](path, method);
      console.log('routed '+route.method);
    } else {
      console.log(route.method+' is not a function');
    }
  },

  execute: function(){



      for (var path in config.routes){

        console.log('routing '+path+'...');

        var routes = config.routes[path];

        if (routes.forEach){
            for (var i=0;i<routes.length;i++){
              this.mapRoute(path,routes[i]);
            }
        } else {
            this.mapRoute(path, routes);
        }


      }


  }

};


