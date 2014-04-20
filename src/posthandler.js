var app = require('../web.js');

app.user(express.bodyParser());

app.post('/admin/test', function(req, res) {
  console.log(request.body.user.username);
});
