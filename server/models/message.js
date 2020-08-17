const mongoose = require('mongoose');
const queries = require('./queries');

const messageSchema = mongoose.Schema(
  {
    matchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Match',
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  }
);

const messageModel = mongoose.model('Message', messageSchema);

const createMessage = async (document) => {
  try {
    return await queries.create(messageModel, document)
  } catch (error) {
    throw error;
  }
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