const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

exports.hashPassword = function (password, model) {
  return new Promise(function(resolve,reject){
    bcrypt.hash(password, null, null, function(err, result) {
      if (err) return reject (err);
      else {
        // model.set('password', 'result');
        resolve(result);
      }
    });
  })
  .then(function(result) {
    return result;
  });
};

exports.comparePassword = (hash, userGivenPassword) => {
  return new Promise(function(resolve, reject){
    bcrypt.compare(userGivenPassword, hash, function(err, result){
      if(err) return reject(err);
      else {
        resolve(result);
      }
    });
  });
};
