const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const lessonSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;