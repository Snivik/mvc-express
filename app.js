/* global imports */
var express;
try {

    express = require('express');
    requireall = require('require-dir');

} catch (e){

    console.dir(e);
    console.log('Failed to load dependencies. Make sure you run npm install before');
    return;
}

/* Local Imports */
var bootstraps = requireall('bootstraps');
config = requireall('config');
models = requireall('models');
app = express();

//controllers = requireall('controllers');

var bs_before = [];
var bs_after = [];
var system_operations = [];

/* Collect system & user bootstraps */

// User bootstraps
for (var bs_key in bootstraps){

    var bs = bootstraps[bs_key];
    if (!bs) continue;
    console.log('loading bootstrap: '+bs_key);
    bs.name = bs_key;
    if (bs.before) bs_before.push(bs);
    else bs_after.push(bs);
}


// System bootstraps
var system_bootstraps = requireall('bootstraps/system');
for (var bs_key in system_bootstraps){

    var bs = system_bootstraps[bs_key];

    if (!bs) continue;
    console.log('loading system bootstrap: '+bs_key);
    bs.name = bs_key;
    system_operations.push(bs);
}


/*
* Function that will execute all bootstraps in given order
*/
function executeBootstraps(bootstraps){
    bootstraps.sort(function(i){return i.order}).forEach(function(procedure){

        // Check if procedure does have execute method
        if (typeof procedure.execute != 'function'){
            console.log(procedure.name+" doesn't have execute procedure");
            return;
        }

        console.log('executing bootstrap: '+procedure.name);
        procedure.execute();
    });

}
[bs_before, system_operations, bs_after].forEach(executeBootstraps);

app.listen(configuration.port ? configuration.port : 8080, function(){
    console.log('express server successfully started on port '+ (configuration.port ? configuration.port : 8080));
});