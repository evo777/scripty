const mongoose = require('mongoose');
const ObjId = mongoose.Types.ObjectId;

const Lesson = require('../data/models/lesson');
const Reading = require('../data/models/reading');
const Problem = require('../data/models/problem');

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

exports.getLessonById = (req, res) => {
  const id = req.params.id;
  let result = {};

  // TODO: This oughta be refactored to a promise-oriented chain.
  Lesson.findById(id, (err, lessonInfo) => {
    result.lessonInfo = lessonInfo;
    result.lessonContent = [];

    Problem.find({lessonId: ObjId(id)}, (err, problems) => {
      if (err || !problems) {
        log.error('Error retrieving problems.');
        return;
      }
      result.lessonContent.push(...problems);

      Reading.find({lessonId: ObjId(id)}, (err, readings) => {
        if (err || !readings) {
          log.error('Error retrieving readings.');
          return;
        }
        result.lessonContent.push(...readings);

        log.info('Successfully submitted lesson.');
        res.status(200).json(result);
      });
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
      content.map((item, index) => {
        // NOTE: This is a very hacky way to determine if a piece of content
        // is a probem, rather than a reading. A more robust method of
        // determining this will become necessary, I'm almost certain.
        if (item.order === undefined) { item.order = index; }

        if (item.choices) {
          new Problem(item)
            .save(err => err ? log.error(err) : null);
        } else {
          new Reading(item)
            .save(err => err ? log.error(err) : null);
        }
      });
    });

  res.status(201).send();
};

exports.updateLessonById = (req, res) => {

};
exports.deleteLessonById = (req, res) => {
  const id = req.params.id;
};

exports.getUsers = (req, res) => {};
exports.getUserById = (req, res) => {
  const id = req.params.id;
  const {name, email, password} = req.body;

  Lesson.update({id: ObjId(id)}, {name, email, password}, (err) => {
    if (err) {
      send500(res, err);
    } else {
      res.status(201).send({name, email});
    }
  });
};

exports.createUser = (req, res) => {};
exports.updateUserById = (req, res) => {};
exports.deleteUserById = (req, res) => {};

