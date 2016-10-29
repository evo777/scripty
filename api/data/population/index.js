const mongoose = require('mongoose');

const log = require('../../helpers/log');

const Lesson = require('../models/lesson');
const Reading = require('../models/reading');
const Problem = require('../models/problem');

/*
 *  DATAYPE: Lesson
 *
 *  @title <String> alias lessonTitle
 *  @description <String> alias lessonDescription
 *  @contents <Array[Content]> alias lessonContents
 */
const testlesson = {
  title: 'Hello World',
  description: 'Welcome to Javascript!',
  contents: [
    {
      type: 'reading',
      text: 'This is a test of our lesson schema.'
    },
    {
      type: 'question',
      text: '_________(\'Hello world!\')',
      choices: [ 'console.log', 'print' ],
      answer: 'console.log',
    }
  ]
};

const createdLesson = new Lesson({
  title: testlesson.title,
  description: testlesson.description,
})
.save((err, lesson) => {
  if (err) {
    log.error('Error saving test lesson.', err);
  }

  new Reading({
    order: 0,
    text: testlesson.contents[0].text,
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(err => {
    if (err) {
      log.error('Error saving test reading.', err);
    }
  });

  new Problem({
    order: 1,
    text: testlesson.contents[1].text,
    choices: testlesson.contents[1].choices,
    answer: testlesson.contents[1].answer,
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(err => {
    if (err) {
      log.error('Error saving test problem.', err);
    }
  });
});

module.exports = createdLesson;