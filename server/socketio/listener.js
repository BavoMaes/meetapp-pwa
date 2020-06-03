const userController = require('../controllers/user');

this.listen = (socket) => {
  console.log('A user connected.');
  socket.on('register', async (user, callback) => {
    let registeredUser = await userController.register(user);
    callback(registeredUser);
  } );
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  })
}

module.exports = {
  listen: this.listen
}