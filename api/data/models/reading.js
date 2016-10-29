const mongoose = require('mongoose');

const readingSchema = mongoose.Schema({
  order: {type: Number, default: 0},
  text: String,
  lessonId: mongoose.Schema.Types.ObjectId
});

const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;