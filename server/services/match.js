const matchModel = require('../models/match');
const match = require('../models/match');

const createMatch = async (match) => {
  try {
    let newMatch = await matchModel.model.create(match);
    let fullMatch = await matchModel.model.findById(newMatch._id).populate({path: 'users', select: '_id firstname lastname jobTitle employer'});
    return fullMatch;
  } catch (error) {
    throw error;
  }
}

const getMatchesFromUser = async (user) => {
  try {
    let matches = await matchModel.model.find({users: {$all: [user._id]}}).populate({path: 'users', select: '_id firstname lastname jobTitle employer'});
    let cleanedMatches = await cleanMatches(matches, user);
    return cleanedMatches;
  } catch (error) {
    throw error
  }
}

const cleanMatches = async (matches, currentUser) => {
  let cleanedMatches = [];
  matches.map(async (match) => {
    match.users.map(async (user) => {
      if (String(user._id) != String(currentUser._id)) {
        cleanedMatches.push({_id: match._id, user: user})
      }
    })
  });
  return cleanedMatches;
}

module.exports = {
  create: createMatch,
  getFromUser: getMatchesFromUser
}