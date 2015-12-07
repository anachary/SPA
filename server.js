var express    = require('express'),
app            = express(),
mongoose       = require('mongoose'),
bodyParser     = require('body-parser'),
methodOverride = require('method-override');
//configuracion

//config files
var db = require('./config/db');
//set port
var port = process.env.PORT || 8080;

mongoose.connect(db.url);


// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'applicaction/vnd.api+json'}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));
//rutas
require('./app/routes')(app); //configurando las rutas
//iniciando la aplicacion
//diciendole el puerto
app.listen(port);

//shoutout to the user
console.log("Server running on port" + port);

//expose app
exports = module.exports =app;
