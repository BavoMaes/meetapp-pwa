const bcrypt = require('bcrypt');

const userModel = require('../models/user');
const authController = require('../controllers/auth');

const registerUser = async (user) => {
  try {
    if (await checkIfUserExists(user)) {
      return {error: 'User already exists.'}
    }
    user.password = await hashPassword(user.password);
    let createdUser = await createUser(user);
    return await validateCreatedUser(createdUser);
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

const loginUser = async (user) => {
  try {
    let existingUser = await checkIfUserExists(user);
    if (!existingUser) {
      return {error: 'Invalid user credentials.'}
    }
    if (! await compareHashes(user.password, existingUser.password)) {
      return {error: 'Invalid user credentials.'}
    }
    return {
      token: await authController.sign(user._id),
      id: user._id
    }
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

const checkIfUserExists = async (user) => {
  try {
      return await userModel.model.findOne({
        email: user.email
      });
  } catch (error) {
    console.error(error);
    return null;
  }
}

const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

const createUser = async (user) => {
  try {
    let createdUser = await userModel.create(user);
    console.log(`User created: ${createdUser.firstname} ${createdUser.lastname}`);
    return createdUser;
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

const validateCreatedUser = async (user) => {
  if (!user) {
    return { error: 'User could not be created'};
  }
  return user;
}

const compareHashes = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  register: registerUser,
  login: loginUser
}