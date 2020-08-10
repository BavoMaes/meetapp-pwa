const matchService = require('../services/match');

const runMatchSeeder = async (users) => {
  try {
    let matches = [];
    users.map(async (user1) => {
      users.map(async (user2) => {
        if (user1._id !== user2._id) {
          let newMatch = await matchService.create({
            users: [user1, user2]
          })
          matches.push(newMatch);
        }
      })
    });
    return matches;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  run: runMatchSeeder
}