const mongoose = require('mongoose');
const queries = require('./queries');

const userLimit = (users) => {
  return users.length <= 2;
}

const matchSchema = mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }]
});

const matchModel = mongoose.model('Match', matchSchema);

const createMatch = (document) => {
  return queries.create(matchModel, document)
};
const findMatchById = (document) => {
  return queries.findById(matchModel, document)
};
const updateMatch = (document) => {
  return queries.update(matchModel, document)
};
const deleteMatch = (document) => {
  return queries.delete(matchModel, document)
};

module.exports = {
  model: matchModel,
  create: createMatch,
  findById: findMatchById,
  update: updateMatch,
  delete: deleteMatch
}