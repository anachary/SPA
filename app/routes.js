//agarrando el modelo NERD.js
var Nerd = require('./models/nerd');

module.exports = function(app) {

  // sample api route
  app.get('/api/nerds', function(req, res) {
    NERD.find(function(err, nerds) {
      if (err)
        res.send(err);

      res.json(nerds); //devolviendo todos los nerds con el formato json
    });
  });


  //rout to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('/.public/index.html');
  });
};
