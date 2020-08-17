const messageService = require('../services/message');

const getMessagesFromUser = async (user) => {
  try {
    let messages = await messageService.getFromUser(user);
    return messages;
  } catch (error) {
    throw error;
  }
}

const getMessagesFromMatch = async (match) => {
  try {
    return await messageService.getFromMatch(match);
  } catch (error) {
    throw error;
  }
}

const sendMessage = async (message) => {
  try {
    let sentMessage = await messageService.create(message);
    return sentMessage;
  } catch (error) {
    throw error;
  }
}

const updateMessage = async (message) => {
  try {
    return await messageService.update(message);
  } catch (error) {
    throw error;
  }
}

const deleteMessage = async (message) => {
  try {
    return await messageService.delete(message);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getFromUser: getMessagesFromUser,
  getFromMatch: getMessagesFromMatch,
  send: sendMessage,
  update: updateMessage,
  delete: deleteMessage
}