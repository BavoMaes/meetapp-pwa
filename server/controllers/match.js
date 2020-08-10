const matchService = require('../services/match');

const createMatch = async (match) => {
  try {
    return await matchService.createMatch(match);
  } catch (error) {
    throw error;
  }
}

const getAllMatches = async (user) => {
  try {
    return await matchService.getAll(user);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create: createMatch,
  getAll: getAllMatches
}