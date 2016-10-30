const mongoose = require('mongoose');
const Content = require('../data/models/content');

const ObjId = mongoose.Types.ObjectId;

const log = require('../helpers/log');
const send500 = require('../helpers/send500');
const send404 = require('../helpers/send404');

exports.getContent = (req, res) => {};

exports.getContentById = (req, res) => {
  const id = req.params.id;
};

exports.getContentByType = (req, res) => {
  const type = req.params.type;
};

exports.createContent = (req, res) => {};

exports.updateContentById = (req, res) => {
  const id = req.params.id;
};

exports.deleteContentById = (req, res) => {
  const id = req.params.id;
};

