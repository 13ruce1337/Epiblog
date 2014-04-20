var mongoose = require('mongoose'),
    User = require('../models/accounts');

mongoose.connect('mongodb://localhost/epihedron', function(err) {
  if(err) throw err;
});

User.findOne({username: 'admin'}, function(err, user) {
  if(err) throw err;
  user.comparePassword('pass', function(err, isMatch) {
    if(err) throw err;
    //pass is a match
  });
});
