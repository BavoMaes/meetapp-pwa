const authService = require('../services/auth');
const userService = require('../services/user');
const matchService = require('../services/match');
const messageService = require('../services/message');
const userModel = require('../models/user');
const rooms = require('./rooms');

const authenticate = async (socket, token, callback) => {
  try {
    let userId = await authService.verify(token);
    let existingUser = await userModel.findById({id: userId})
    if (!existingUser) {
      return callback(new Error('Could not authenticate user...'));
    };
    let matches = await matchService.getFromUser(existingUser);
    await rooms.joinChatRooms(socket, matches);
    return callback(null, {
      user: await userService.strip(existingUser),
      matches: matches,
      messages: await messageService.getFromUser(existingUser),
      users: await userService.getAvailable(existingUser, matches)
    });
  } catch (error) {
    console.error(error);
    return callback(new Error('Could not authenticate user.'))
  }
}

module.exports = {
  listen: authenticate
}