const mongoose = require('mongoose');

/*
  TODO: Achievement and progress info should be included in the schema.
*/
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;