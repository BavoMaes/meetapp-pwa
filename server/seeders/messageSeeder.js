const messageSeed = require('./seeds/messages.json');
const messageService = require('../services/message');

const runMessageSeeder = async (user) => {
  try {
    return await Promise.all(
      messageSeed.messages.map(async (content) => {
        let message = {
          userId: '5f22be524444925c81db132f',
          content: content.content
        }
        messageService.send(message);
      })
    )
  } catch (error) {
    throw error;
  }
}

module.exports = {
  run: runMessageSeeder
}