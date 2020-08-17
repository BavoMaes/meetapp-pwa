const errorServer = 'Something went wrong. Please try again later.'
const errorInvalidCredentials = 'Invalid user credentials.'
const errorExistingUser = 'User already exists.'

const errors = [errorServer, errorInvalidCredentials, errorExistingUser];

const handleError = (error) => {
  console.log(error.message);
  if (!errors.includes(error.message)) {
    return {error: errorServer}
  }
  return {error: error.message}
}

module.exports = {
  handleError: handleError
}