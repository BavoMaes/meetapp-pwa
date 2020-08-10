const messageSeed = require('./seeds/messages.json');
const messageService = require('../services/message');

const runMessageSeeder = async (users) => {
  try {
    return await Promise.all(
      users.map(async (user) => {
        messageSeed.messages.map(async (message) => {
          let newMessage = {
            userId: user._id,
            content: message.content
          }
          return await messageService.send(newMessage);
        })
      })
    )
  } catch (error) {
    throw error;
  }
}

module.exports = {
  run: runMessageSeeder
}