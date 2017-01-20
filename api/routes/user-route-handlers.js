const mongoose = require('mongoose');
const User = require('../data/models/user');
const hashingHelpers = require('../helpers/hashingHelpers');


const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.checkAuthentication = (req, res) => {
  var username = req.params.username;
  var {providedUsername, password} = req.body;
  var authenticated = false;
  var statusCode = 200;

  User.findOne({username: username})
  .then(function(user) {
    hashingHelpers.comparePassword(user.password, password)
    .then(hashesMatch => {
      if (hashesMatch) {
        authenticated = true;
      }
      //hide hash with an easter egg
      user.password = "http://i.imgur.com/zugsAYb.gif";
      if (!authenticated) {
        statusCode = 403;
        user = "Incorrect username or password, try again";
      }
      res.status(statusCode).send(user);
    });
  });
};

exports.createUser = (req, res) => {
  var data = req.body;
  var {username, password} = req.body;
  var statusCode = 201;

  password = hashingHelpers.hashPassword(password)
  .then((password) => {
    User.create({username, password}, (err, user) => {
      if (err) {
        log.error(err);
        statusCode = 409;
        user = "Username must be unique, try another";
      }
      res.status(statusCode).send(user);
    });
  });
};

exports.updateUserByUsername = (req, res) => {
  var username = req.params.username;
  var newUsername = req.body.username;
  var statusCode = 201;
  User.findOneAndUpdate({username: username}, {username: newUsername}, {new: true}, (err, doc) => {
    if (err)  {
      statusCode = 409;
      log.error(err);
      doc = "Username must be unique, try another";
    }
    res.status(statusCode).send(doc);
  });
};

exports.deleteUserByUsername = (req, res) => {
  var username = req.params.username;
  User.findOneAndRemove({username: username}, (err, doc) => {
    if (err)  log.error(err);
    res.status(201).send(doc);
  });
};

exports.addCompletedLesson = (req, res) => {
  var username = req.params.username;
  var lessonId = req.body.lessonId;
  var score = req.body.score;
  var title = req.body.title;
  var questionNumber = req.body.questionNumber
  User.findOne({username: username})
  .then(function(user) {
    //reset user's totalScore
    user.totalScore = 0;
    user.lessonsCompleted.forEach(function(lesson) {
      if (lesson.lessonId === lessonId) {
        if (lesson.score < score) {
          //update new, greater score for that lesson
          lesson.score = score;
        }
      }
      user.totalScore += lesson.score;
    })
    var found = false;
    for (var i = 0; i < user.lessonsCompleted.length; i++) {
      if (user.lessonsCompleted[i].lessonId === lessonId) {
        found = true;
      }
    }
    if (!found) {
      user.lessonsCompleted.push({score: score, lessonId: lessonId, title: title, questionNumber: questionNumber});
    }

    User.findOneAndUpdate({username: username}, {lessonsCompleted: user.lessonsCompleted, totalScore: user.totalScore}, function(err) {
     if (err) {
       log.error(err);
     }
     res.status(201).send(user);
    });
  });
};

exports.getAllScores = (req, res) => {

  User.find({}, function(err, results) {
    var scores = [];
    results.forEach((user) => {
      var leaderboardEntry = {
        username: user.username,
        totalScore: user.totalScore
      };
      scores.push(leaderboardEntry);
    })

    scores.sort(function(a, b) {
      if(a.totalScore > b.totalScore) {
        return -1;
      }
      if(a.totalScore < b.totalScore) {
        return 1;
      }
      return 0;
    })

    res.status(200).send(scores);
  })
}
