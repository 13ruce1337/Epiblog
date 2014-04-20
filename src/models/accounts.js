var mongoose = require('mongoose'),
    _ = require('underscore');

//mongoose.connect(process.env.MONGOHQ_URL);
mongoose.connect('mongodb://localhost/epihedron');

var Accounts = mongoose.model('Accounts', { 
      username:'string',
      firstname:'string',
      lastname:'string'
    }),
    user = new Accounts({username:'admin'});

user.save(function(err) {
  if(err) {
    return console.log('failed');
  } else {
    return console.log('done');
  }
});

Accounts.find({}, function(err, data) {
  return console.log(data.toString());
});
