const bcrypt = require('bcrypt');

const userModel = require('../models/user');
const authController = require('../controllers/auth');

this.registerUser = async (user) => {
  try {
    if (this.checkIfUserExists(user)) {
      return {error: 'User already exists.'}
    }
    user.password = await this.hashPassword(user.password);
    let createdUser = await this.createUser(user);
    return this.validateCreatedUser(createdUser);
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

this.loginUser = async (user) => {
  try {
    let existingUser = await this.checkIfUserExists(user);
    if (!existingUser) {
      return {error: 'Invalid user credentials.'}
    }
    if (! await this.compareHashes(user.password, existingUser.password)) {
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

this.checkIfUserExists = async (user) => {
  try {
      return await userModel.findOne({
        email: user.email
      });
  } catch (error) {
    console.error(error);
    return null;
  }
}

this.hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

this.createUser = async (user) => {
  try {
    let createdUser = await userModel.create(user);
    console.log(`User created: ${user.firstname} ${user.lastname}`);
    return createdUser;
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong, try again later.'
    }
  }
}

this.validateCreatedUser = async (user) => {
    if (!user) {
      return { error: 'User could not be created'};
    }
    return user;
}

this.compareHashes = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  register: this.registerUser,
  login: this.loginUser
}