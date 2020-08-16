const messageController = require('../controllers/message');
const faceController = require('../controllers/face');

this.listen = (socket, data) => {
  // Send a chat message
  socket.on('sendMessage', async (message, callback) => {
    let sentMessage = await messageController.send(message);
    socket.to(message.matchId).emit('ADD_MESSAGE', sentMessage);
    callback({message: sentMessage});
  });
  socket.on('recognizeFace', async (input, width, height, callback) => {
    try {
      let result = await faceController.recognize(input, width, height);
      callback(result);
    } catch (error){
      console.log(error.message);
      return {error: error.message}
    }
  })
}

module.exports = {
  listen: this.listen
}