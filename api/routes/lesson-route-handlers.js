const mongoose = require('mongoose');
const Lesson = require('../data/models/lesson');
const Content = require('../data/models/content');
const contentHandlers = require('./content-route-handlers');

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

exports.getAllLessonsByType = (req, res) => {
  const type = req.params.type;

  Lesson.find({type: type}, (err, lessons) => {
    if (err) {
      send500(res, 'Error retrieving content.', err);
      return;
    }
    res.status(200).send(lessons);
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

exports.createLesson = (req, res) => {
  const {title, description, type} = req.body;

  new Lesson({title, description, type})
    .save().then((lesson) => {
      log.info(lesson);
      res.status(201).json(lesson);
    });

};

exports.updateLessonById = (req, res) => {
  const id = req.params.id;
  var data = req.body;

  Lesson.findOneAndUpdate({_id: id}, data, {new: true}, function(err, doc) {
    if (err) {
      log.error(err)
    }
    return doc;
  });

  res.status(201).send("updated a lesson");
};

exports.deleteLessonById = (req, res) => {
  const id = req.params.id;

  Lesson.findOneAndRemove({_id: id}, function(err, doc) {
    if (err) {
      log.error(err)
    }
    return doc;
  });

  contentHandlers.deleteAllContentsByLessonId(id);
  res.status(200).send("deleted lesson");
};


