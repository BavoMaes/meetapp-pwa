const messageService = require('../services/message');

const getMessagesFromUser = async (user) => {
  try {
    let messages = await messageService.getFromUser(user);
    return messages;
  } catch (error) {
    console.error(error.message);
    return {
      error: 'Something went wrong. Please try again later.'
    }
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
    console.error(error.message);
    return {
      error: 'Something went wrong. Please try again later.'
    }
  }
}

module.exports = {
  getFromUser: getMessagesFromUser,
  getFromMatch: getMessagesFromMatch,
  send: sendMessage
}