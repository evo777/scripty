const mongoose = require('mongoose');

/* Data type: User
 *
 * Not currently developed. May need to accomidate lesson progress and achieve-
 * ments. Not to mention password encryption.
 *
 * @name: <String>
 *  The user's username.
 * @email: <String>
 *  The user's email.
 * @password: <String>
 *  Believe it or not: it's the user's password.
 **/

const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  lessonsCompleted: Array,
  totalScore: {type: Number, default: 0}
});

const User = mongoose.model('User', userSchema);

module.exports = User;