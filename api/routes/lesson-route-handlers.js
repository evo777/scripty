const mongoose = require('mongoose');
const Lesson = require('../data/models/lesson');
const Content = require('../data/models/content');

const ObjectId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getAllLessons = (req, res) => {
  Lesson.find({}, (err, lessons) => {
    if (err) {
      log.error(err);
      return;
    }
    res.status(200).json(lessons);
  });
};

exports.getLessonAndContentsById = (req, res) => {
  const id = req.params.id;
  const result = {};

  Lesson.findById(id, (err, lessonInfo) => {
    result.lessonInfo = lessonInfo;
    result.lessonContent = [];

    Content.find({lessonId: ObjectId(id)}, (err, content) => {
      if (err) {
        send500(res, 'Error retrieving content.', err);
        return;
      }

      result.lessonContent.push(...content);
      log.success('Successfully retrieved lesson.');
      res.status(200).json(result);
    });
  });
};

// TODO(Mitch): Needs testing.
exports.createLesson = (req, res) => {
  const {title, description, content} = req.body;

  // Check intergrity of lesson content
  if (content.length === 0) {
    send500(res, 'Lesson submitted without content.');
    return;
  }

  new Lesson({title, description})
    .save((err, lesson) => {
      content.forEach((item, index) => {
        if (item.order === undefined) { item.order = index; }

        new Content(item)
          .save(err => err ? log.error(err) : null);
      });
    });

  res.status(201).send();
};

exports.updateLessonById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};

exports.deleteLessonById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};
