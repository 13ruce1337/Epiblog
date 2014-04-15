var app = require('../web.js');

app.get('/',function(req,res) {
	res.render('../index.html',{ok:'dat boi guuud'});
});
