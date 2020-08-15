const messageController = require('../controllers/message');
const matchController = require('../controllers/match');

this.listen = (socket, data) => {
  // Get all chat messages
  socket.on('getMessages', async (user, callback) => {
    let messages = await messageController.getFromUser(user);
    callback(messages);
  });
  // Send a chat message
  socket.on('sendMessage', async (message, callback) => {
    let sentMessage = await messageController.send(message);
    io.emit('ADD_MESSAGE', sentMessage);
    callback(sentMessage);
  });
  // Initialize conversations
  socket.on('getMatches', async (user, callback) => {
    console.log('Matches!');
    let matches = await matchController.getAll(user);
    callback(matches);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  })
}

module.exports = {
  listen: this.listen
}