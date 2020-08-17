const messageModel = require('../models/message');
const matchService = require('./match');

const getMessagesFromUser = async (user) => {
  try {
    let matches = await matchService.getFromUser(user);
    let matchIds = matches.map(match => match._id);
    let messages = await messageModel.model.find({matchId: {$in: matchIds}}).populate();
    return messages;
  } catch (error) {
    throw error;
  }
}

const getMessagesFromMatch = async (match) => {
  try {
    return await messageModel.model.find({matchId: match._id}).populate();
  } catch (error) {
    throw error;
  }
}

const createMessage = async (message) => {
  try {
    let createdMessage = await messageModel.create(message);
    return createdMessage;
  } catch (error) {
    throw error;
  }
} 

const updateMessage = async (message) => {
  try {
    return await messageModel.update(message);
  } catch (error) {
    throw error;
  }
}

const deleteMessage = async (message) => {
  try {
    return await messageModel.delete(message);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getFromUser: getMessagesFromUser,
  getFromMatch: getMessagesFromMatch,
  create: createMessage,
  update: updateMessage,
  delete: deleteMessage
}