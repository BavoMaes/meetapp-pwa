const jwt = require('jsonwebtoken');

// jsonwebtoken
// https://github.com/auth0/node-jsonwebtoken
// Laatst geraadpleegd op 3 juni 2020

const sign = async (id) => {
  try {
    return jwt.sign({
        userId: id
      },
      process.env.JWT_KEY)
  } catch (error) {
    throw error;
  }
}

// jsonwebtoken
// https://github.com/auth0/node-jsonwebtoken
// Laatst geraadpleegd op 3 juni 2020

const verifyToken = async (token) => {
  try {
    let decodedToken = jwt.verify(token, process.env.JWT_KEY);
    return decodedToken.userId
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sign: sign,
  verify: verifyToken
}