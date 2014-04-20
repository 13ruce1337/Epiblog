/*
    Accounts Model
*/

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10,
    _ = require('underscore');

var Schema = mongoose.Schema,
    Accounts = new Schema({ 
      username: {type: 'string', required: true, index: {unique:true}},
      firstname: {type: 'string', required: true},
      lastname: {type: 'string', required: true}
      password: {type: 'string', required: true}
    });

Accounts.pre('save',function(next) {
  var user = this;
  if(!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

Accounts.methods.comparePassword = function(enteredPass, cb) {
  bcrypt.compare(enteredPass, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null,isMatch);
  });
};

mondule.exports = mongoose.model('Accounts', Accounts);
