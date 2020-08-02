const jwt = require('jsonwebtoken');

// jsonwebtoken
// https://github.com/auth0/node-jsonwebtoken
// Laatst geraadpleegd op 3 juni 2020

this.sign = async (id) => {
  try {
    return jwt.sign({
        userId: id
      },
      process.env.JWT_KEY)
  } catch (error) {
    console.error(error);
  }
}

// jsonwebtoken
// https://github.com/auth0/node-jsonwebtoken
// Laatst geraadpleegd op 3 juni 2020

this.verifyToken = async (token) => {
  try {
    let decodedToken = jwt.verity(token, process.env.JWT_KEY);
    return decodedToken.userId
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  sign: this.sign
}