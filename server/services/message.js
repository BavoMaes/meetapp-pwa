const messageModel = require('../models/message');

const sendMessage = async (message) => {
  try {
    let sentMessage = await messageModel.create(message);
    return sentMessage;
  } catch (error) {
    throw error;
  }
}

const getAllMessages = async () => {
  try {
    let messages = await messageModel.model.find().populate();
    return messages;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  send: sendMessage,
  getAll: getAllMessages
}