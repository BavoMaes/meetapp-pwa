const messageController = require('../controllers/message');
const faceController = require('../controllers/face');
const matchController = require('../controllers/match');

const listen = (socket, data) => {
  // Send a chat message
  socket.on('sendMessage', async (message, callback) => {
    try {
      let sentMessage = await messageController.send(message);
      socket.to(message.matchId).emit('ADD_MESSAGE', sentMessage);
      callback({message: sentMessage});
    } catch (error) {
      console.error(error.message);
      callback({error: 'Something went wrong. Please try again later.'});
    }

  });
  socket.on('recognizeFace', async (input, width, height, callback) => {
    try {
      let result = await faceController.recognize(input, width, height);
      callback(result);
    } catch (error){
      console.log(error.message);
      callback({error: 'Something went wrong. Please try again later.'});
    }
  });
  socket.on('addMatch', async (match, callback) => {
    try {
      let newMatch = await matchController.create(match);
      callback(newMatch);
    } catch (error) {
      console.log(error.message);
      callback({error: 'Something went wrong. Please try again later.'});
    }
  })
}

module.exports = {
  listen: listen
}