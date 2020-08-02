const userService = require('../services/user');

const registerUser = async (user) => {
  try {
    return await userService.register(user);
  } catch (error) {
    console.error(error.message);
    if (error.message === 'User already exists.') {
      return {error: error.message};
    }
    return {error: 'Something went wrong. Please try again later.'}
  }
}

const loginUser = async (user) => {
  try {
    return await userService.login(user);
  } catch (error) {
    console.error(error.message);
    if (error.message === 'Invalid user credentials.') {
      return {
        error: error.message
      };
    }
    return {error: 'Something went wrong. Please try again later.'}
  }
}

module.exports = {
  register: registerUser,
  login: loginUser
}