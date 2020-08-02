const bcrypt = require('bcrypt');

const userModel = require('../models/user');
const authService = require('./auth');

const registerUser = async (user) => {
  try {
    if (await checkIfUserExists(user)) {
      throw Error('User already exists.');
    }
    user.password = await hashPassword(user.password);
    let createdUser = await createNewUser(user);
    let validatedUser = await validateUser(createdUser);
    return validatedUser;
  } catch (error) {
    throw error;
  }
}

const loginUser = async (user) => {
  try {
    let existingUser = await checkIfUserExists(user);
    if (!existingUser) {
      throw new Error('Invalid user credentials.');
    }
    if (! await compareHashes(user.password, existingUser.password)) {
      throw new Error('Invalid user credentials');
    }
    return {
      token: await authService.sign(user)
    }
  } catch (error) {
    throw error;
  }
}

const checkIfUserExists = async (user) => {
  try {
    return await userModel.model.findOne({
      email: user.email
    });
  } catch (error) {
    throw error;
  }
}

const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw error;
  }
}

const compareHashes = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw error;
  }
}

const createNewUser = async (user) => {
  try {
    return await userModel.create(user);
  } catch (error) {
    throw error;
  }
}

const validateUser = async (user) => {
  try {
    if (!user) {
      throw new Error();
    }
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  register: registerUser,
  login: loginUser
}