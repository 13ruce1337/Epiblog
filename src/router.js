var app = require('../web.js');

app.get('/',function(req,res) {
	res.render('../index.html');
});

app.get('/admin', function(req, res) {
  res.render('../src/views/blog-admin.html');
});
