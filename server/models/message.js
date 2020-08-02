const mongoose = require('mongoose');
const queries = require('./queries');

const messageSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const messageModel = mongoose.model('Message', messageSchema);

const createMessage = async (document) => {
  return await queries.create(messageModel, document)
};
const findMessageById = async (document) => {
  return await queries.findById(messageModel, document)
};
const updateMessage = async (document) => {
  return await queries.update(messageModel, document)
};
const deleteMessage = async (document) => {
  return await queries.delete(messageModel, document)
};

module.exports = {
  model: messageModel,
  create: createMessage,
  findById: findMessageById,
  update: updateMessage,
  delete: deleteMessage
}