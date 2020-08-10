const userSeed = require('./seeds/users.json');
const userController = require('../controllers/user');

const runUserSeeder = async () => {
  try {
    return await Promise.all(
      userSeed.users.map(async (user) => {
        return await userController.register(user);
      })
    );
  } catch (error) {
    throw error;
  }
}

module.exports = {
  run: runUserSeeder
}