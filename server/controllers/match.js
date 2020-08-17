const matchService = require('../services/match');

const createMatch = async (match) => {
  try {
    return await matchService.create(match);
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

const updateMatch = async (match) => {
  try {
    return await matchService.update(match);
  } catch (error) {
    throw error;
  }
}

const deleteMatch = async (match) => {
  try {
    return await matchService.delete(match);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create: createMatch,
  getAll: getAllMatches,
  update: updateMatch,
  delete: deleteMatch
}