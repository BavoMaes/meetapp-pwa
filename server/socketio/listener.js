const registerController = require('../controllers/register');

this.listen = (socket) => {
  console.log('A user connected.');
  socket.on('register', async (user, callback) => {
    let registeredUser = await registerController.register(user);
    callback(registeredUser);
  } );
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  })
}

module.exports = {
  listen: this.listen
}