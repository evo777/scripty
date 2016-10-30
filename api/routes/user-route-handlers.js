const mongoose = require('mongoose');
const User = require('../data/models/user');

const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getUsers = (req, res) => {};

// TODO(Mitch): Needs testing.
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

exports.updateUserById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};

exports.deleteUserById = (req, res) => {
  const id = req.params.id;
  //TODO(Mitch): Fill me in!
};