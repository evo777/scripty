const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  choices: [String],
  answer: String,
  lessonId: mongoose.Schema.Types.ObjectId
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;