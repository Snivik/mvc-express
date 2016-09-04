/**
 * Created by snivik on 9/3/16.
 */
module.exports = {

    // Pages
    'index' : function(req,res){

        res.renderEJS('index/index', 'index/scripts');
    },



    // Post functionality, e.g. Rest API
    'api' : {

        'create' : function(req,res){

        },

        'view' : function (req,res){


        },

        'update' : function(req,res){



        },
        'delete' : function(req,res){

        }

    }


};