const bcrypt = require('bcrypt');

const userModel = require('../models/user');
const authService = require('./auth');

const registerUser = async (user) => {
  try {
    if (await checkIfUserExists(user)) {
      throw new Error('User already exists.');
    }
    user.password = await hashPassword(user.password);
    let createdUser = await createNewUser(user);
    if (!createdUser) {
      throw new Error('User could not be created.');
    }
    return {
      token: await authService.sign(String(createdUser._id))
    }
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
      token: await authService.sign(existingUser._id),
    }
  } catch (error) {
    throw error;
  }
}

const getAvailableUsers = async (user, matches) => {
  try {
    let availableUsers = await userModel.model.find({
      email: {$ne: user.email}
    }).select('_id firstname lastname jobTitle employer');
    return availableUsers.filter(user => {
      return matches.some((match) => {return String(match.user._id) != String(user._id)})
    })
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

const stripSensitiveData = (user) => {
  return {
    _id: user._id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    jobTitle: user.jobTitle,
    employer: user.employer,
  }
}

module.exports = {
  register: registerUser,
  login: loginUser,
  getAvailable: getAvailableUsers,
  strip: stripSensitiveData
}