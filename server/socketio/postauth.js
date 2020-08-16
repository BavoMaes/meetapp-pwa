const messageController = require('../controllers/message');
const matchController = require('../controllers/match');

this.listen = (socket, data) => {
  // Send a chat message
  socket.on('sendMessage', async (message, callback) => {
    let sentMessage = await messageController.send(message);
    socket.to(message.matchId).emit('ADD_MESSAGE', sentMessage);
    callback({message: sentMessage});
  });
}

module.exports = {
  listen: this.listen
}