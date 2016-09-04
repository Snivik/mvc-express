/**
 * This is a good example of a proper bootstrap executed before system.
 * It will go and fix all the routes from readable to proper ones
 */
module.exports = {
    before: true,
    execute: function(){



        for (var route_key in config.routes){
            var route_val = config.routes[route_key];

            // Check if route is a string.
            if (typeof route_val == 'string'){

                // Check route key
                route_key_parts = route_key.split(/\s+/);
                if (route_key_parts.length != 2){
                    console.log(route_key+' is not a valid route');
                    continue;
                }

                var request_method = route_key_parts[0];
                var request_path = route_key_parts[1];



                // Find the method
                var route_object = {};
                route_object.type = request_method;
                route_object.method = route_val;

                // If that route doesn't exist, add this as a route
                if (!config.routes[request_path]){
                    config.routes[request_path] = route_object;

                // If this route does exist, check if it's an array
                } else {

                    // If it is, simply psuh the route on top of stack
                    if (config.routes[request_path].forEach){
                        config.routes[request_path].push(route_object);

                    // If it's a single object, just make a list of existing one and new one
                    } else {
                        var temp = config.routes[request_path];
                        config.routes[request_path] = [route_object, temp];
                    }

                }

                // Remove the string version
                delete config.routes[route_key];


            }

        }
    }

};