const userController = require('../controllers/user');

const listen = (socket) => {
  // Register a new user
  socket.on('register', async (user, callback) => {
    try {
      let registeredUser = await userController.register(user);
      callback(registeredUser);
    } catch (error) {
      return error
    }
  });
  // Login a user
  socket.on('login', async (user, callback) => {
    try {
      let userToken = await userController.login(user);
      callback(userToken);
    } catch (error) {
      return error
    }
  });
}

module.exports = {
  listen: listen
}