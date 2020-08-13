const messageModel = require('../models/message');
const matchService = require('./match');

const sendMessage = async (message) => {
  try {
    let sentMessage = await messageModel.create(message);
    return sentMessage;
  } catch (error) {
    throw error;
  }
}

const getMessagesFromUser = async (user) => {
  try {
    let matches = await matchService.getAll(user);
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

module.exports = {
  send: sendMessage,
  getFromUser: getMessagesFromUser,
  getFromMatch: getMessagesFromMatch,
  create: createMessage
}