const userController = require('../controllers/user');
const messageController = require('../controllers/message');

this.listen = (socket) => {
  console.log('A user connected.');
  // Register a user
  socket.on('register', async (user, callback) => {
    let registeredUser = await userController.register(user);
    callback(registeredUser);
  });
  // Login a user
  socket.on('login', async (user, callback) => {
    let userToken = await userController.login(user);
    callback(userToken);
  });
  // Get all chat messages
  socket.on('getMessages', async (callback) => {
    let messages = await messageController.getAll();
    callback(messages);
  })
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  })
}

module.exports = {
  listen: this.listen
}