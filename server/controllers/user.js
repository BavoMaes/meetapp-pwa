const userService = require('../services/user');

const registerUser = async (user) => {
  try {
    return await userService.register(user);
  } catch (error) {
    throw error;
  }
}

const loginUser = async (user) => {
  try {
    return await userService.login(user);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  register: registerUser,
  login: loginUser
}