/*
* Configurations file contains options for different deployment enivronments
* */
module.exports = {

    'dev' : {
        port: '8880'
    },

    'local' : {
        port: '9090'
    },



    /* Don't delete that :) */
    'default' : 'dev'

};

/* Logic to determine default configuration */
var defaultConfig = process.env.configuration;
if (!defaultConfig){
    defaultConfig = module.exports.default;
}
global.configuration = module.exports[defaultConfig];
