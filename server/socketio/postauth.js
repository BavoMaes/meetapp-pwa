const messageController = require('../controllers/message');
const faceController = require('../controllers/face');
const matchController = require('../controllers/match');
const errors = require('../config/errors');

const listen = (socket, data) => {
  // Send a chat message
  socket.on('sendMessage', async (message, callback) => {
    try {
      let sentMessage = await messageController.send(message);
      socket.to(message.matchId).emit('ADD_MESSAGE', sentMessage);
      callback({message: sentMessage});
    } catch (error) {
      callback(errors.handleError(error.message));
    }
  });
  // Update a chat message
  socket.on('updateMessage', async (message, callback) => {
    try {
      let updatedMessage = await messageController.update(message)
      callback(updatedMessage);
    } catch (error) {
      callback(errors.handleError(error.message));
    }
  });
  // Delete a chat message
  socket.on('deleteMessage', async (message, callback) => {
    try {
      let deletedMessage = await messageController.delete(message)
      callback(deletedMessage)
    } catch (error) {
      callback(errors.handleError(error.message));
    }
  });
  // Add a new match
  socket.on('addMatch', async (match, callback) => {
    try {
      let newMatch = await matchController.create(match);
      callback(newMatch);
    } catch (error) {
      callback(errors.handleError(error.message));
    }
  });
  // Update a match
  socket.on('updateMatch', async (match, callback) => {
    try {
      let updatedMatch = await matchController.update(match);
      callback(updatedMatch);
    } catch (error) {
      callback(errors.handleError(error.message));
    }
  });
  // Delete a match
  socket.on('deleteMatch', async (match, callback) => {
    try {
      let deletedMatch = await matchController.delete(match);
      callback(deletedMatch);
    } catch (error) {
      callback(errors.handleError(error.message));
    }
  });
  // Recognize a face
  socket.on('recognizeFace', async (input, width, height, callback) => {
    try {
      let result = await faceController.recognize(input, width, height);
      callback(result);
    } catch (error){
      callback(errors.handleError(error.message));
    }
  });
}

module.exports = {
  listen: listen
}