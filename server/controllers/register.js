const userModel = require('../models/user');

this.registerUser = async (user) => {
  try {
    let data = await userModel.model.create(user);
    if (data) {
      console.log('User created:', user.firstname, user.lastname);
      return data;
    } else {
      console.error('Invalid data');
      return null;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  register: this.registerUser
}