/**
 * Created by snivik on 9/3/16.
 */
module.exports = {

    'index' : function(req,res){

        res.send('<html>Hello</html>');
    },


    'test' : {

        'testPost' : function(req,res){

            res.send({success: true});
        }

    }




}