const matchModel = require('../models/match');
const userService = require('./user');

const createMatch = async (match) => {
  try {
    return await matchModel.create(match);
  } catch (error) {
    throw error;
  }
}

const getAllMatches = async (user) => {
  try {
    let matches = await matchModel.model.find({users: {$all: [user._id]}}).populate({path: 'users'});
    return await cleanMatches(matches, user);
  } catch (error) {
    throw error
  }
}

const cleanMatches = async (matches, currentUser) => {
  let cleanedMatches = [];
  matches.map(async (match) => {
    match.users.map(async (user) => {
      if (user._id != currentUser._id) {
        let strippedUser = userService.strip(user);
        cleanedMatches.push({_id: match._id, user: strippedUser})
      }
    })
  });
  return cleanedMatches;
}

module.exports = {
  create: createMatch,
  getAll: getAllMatches
}