/**
 * Created by snivik on 9/3/16.
 */
module.exports = {

    order: 1,
    execute: function(){

        for (var model_name in global.models){
            global[model_name] = models[model_name]
        }
    }

};