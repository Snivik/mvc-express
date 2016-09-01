/* global imports */
var express, requireall;
try {

    express = require('express');
    requireall = require('require-folder');

} catch (e){

    console.dir(e);
    console.log('Failed to load dependencies. Make sure you run npm install before');
    return;
}

/* Local Imports */
var bootstraps = requireall('bootstraps');
config = requireall('config');
var controllers = requireall('controllers');
models = requireall('models');


bs_before = [];
bs_after = [];

/* Process Bootstraps */
for (var bs_key in bootstraps){

    var bs = bootstraps[bs_key];
    bs.name = bs_key;
    if (bs.before) bs_before.push(bs);
    else bs_after.push(bs);
}

/* Bootstrap Before Routes & Models */
bs_before.sort(function(i){return i.order}).forEach(function(procedure){

    // Check if procedure does have execute method
    if (typeof procedure.execute != 'function'){
        console.log(procedure.name+" doesn't have execute procedure");
        return;
    }

    procedure.execute();
});





/* Bootstrap after Routes & Models */
bs_after.sort(function(i){return i.order}).forEach(function(procedure){

    // Check if procedure does have execute method
    if (typeof procedure.execute != 'function'){
        console.log(procedure.name+" doesn't have execute procedure");
        return;
    }

    procedure.execute();
});