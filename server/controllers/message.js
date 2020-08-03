const messageService = require('../services/message');

const getAllMessages = async () => {
  try {
    let messages = await messageService.getAll();
    return messages;
  } catch (error) {
    console.error(error.message);
    return {
      error: 'Something went wrong. Please try again later.'
    }
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
  getAll: getAllMessages,
  send: sendMessage
}