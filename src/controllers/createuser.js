var mongoose = require('mongoose'),
    User = require('../models/accounts');

mongoose.connect('mongodb://localhost/epihedron', function(err) {
  if(err) throw err;
});

var newUser = new User({
  username: '',
  firstname: '',
  lastname: '',
  password: ''
});

newUser.save(function(err) {
  if(err) throw err;
});
