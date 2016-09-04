/*
* This routing config is used by bootstrap/system/controller to create
* express routes
* */
module.exports = {



    // This is how proper route should look. Feel free to modify it, and add certain handlers
    // to controller bootstrap
    '/sample' : [
        {
            type: 'get',
            // You can burrow your methods as deep as you want
            // + We will take care of your spacing issue :)
            method: 'sample.sample   .     get'
        }
    ],



    /* Those routes will only work with routeAdapter bootstrap. E.g. if you will remove route adapter, it will stop working */

    // routeAdapter will convert this to proper route
    'post /index' : 'home.test.testPost',

    // routeAdapter will convert this to a proper route & add it to /index routes
    'get /index' : 'home.index',

    // routeAdapter will add to already existing /sample as post method
    'post /sample' : 'sample.sample.post',

    // routeAdapter will properly convert it, but controller bootstrap will skip it as it won't find the correct method
    'delete /sample' : 'sample.sample.delete',


    // Other Demo Routes
    'get /users' : 'users.index'

};

