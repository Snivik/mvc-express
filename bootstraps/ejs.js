/**
 * Simple module enables Template based EJS rendering
 */
module.exports = {


  /*
   It's simple. rendering of EJS in the context of this
   */
  renderEJS: function(file, scripts, data, layout){

      var scope = this;
      if (!data) data = {}
      if (!layout) layout = 'layout';

      this.render(file, function(err, fileHTML){
          if (err){
              scope.status(500).send(err);
          } else {
              data.body = fileHTML;
              scope.render(scripts, function(scriptsErr, scriptsHTML){
                if (scriptsErr) scope.status(500).send(err);
                  else {
                    data.scripts=scriptsHTML;
                    scope.render(layout, data);
                  }
              });
          }



      });



  },

  execute: function(){
        app.set('view engine', 'ejs');
        app.set('views', './views');

        var ejs = require('ejs');

        express.response.renderEJS = this.renderEJS;
  }

};