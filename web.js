/* 
	Epiblog webserver initializer
*/

//requiring dependencies
var express = require('express');
var logfmt = require('logfmt');
var lessMiddleware = require('less-middleware');
var hogan = require('hogan-express');
var path = require('path');

//all environment variables
var app = module.exports = express();
var port = Number(process.env.PORT || 5000);

app.use(logfmt.requestLogger());
app.use(lessMiddleware(path.join(__dirname,'public'),{
	paths:[path.join(__dirname,'public','less')]
}));
app.use(express.static(path.join(__dirname,'public')));
app.set('layout',path.join(__dirname,'src','views','blog-layout'));
app.engine('less',lessMiddleware);
app.engine('html',hogan);

//page routing called after env loads
require('./src/router');

//listening port
app.listen(port, function() {
  console.log("Listening on " + port);
});
