const bcrypt = require('bcrypt');

const userModel = require('../models/user');

this.registerUser = async (user) => {
  try {
    if (!this.checkIfUserExists(user)) {
      return {error: 'User already exists.'}
    }
    user.password = await this.hashPassword(user.password);
    let createdUser = await this.createUser(user);
    return this.validateCreatedUser(createdUser);
  } catch (error) {
    console.log(error);
  }
}

this.checkIfUserExists = async (user) => {
  try {
      return await userModel.find({
        email: user.email
      });
  } catch (error) {
    console.error(error);
  }
}

this.hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error(error);
  }
}

this.createUser = async (user) => {
  try {
    let createdUser = await userModel.create(user);
    console.log(`User created: ${user.firstname} ${user.lastname}`);
    return createdUser;
  } catch (error) {
    console.error(error);
  }
}

this.validateCreatedUser = async (user) => {
    if (!user) {
      return { error: 'User could not be created'};
    }
    return user;
}

module.exports = {
  register: this.registerUser
}