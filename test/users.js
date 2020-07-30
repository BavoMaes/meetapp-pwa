const assert = require('chai').assert;
const rewire = require('rewire');

const userController = rewire('../server/controllers/user');

describe('User validation', () => {
  const validateCreatedUser = userController.__get__('validateCreatedUser');

  it('Empty user should return error', async () => {
    let validatedUser = await validateCreatedUser(null);
    assert.isTrue(validatedUser.hasOwnProperty('error'));
  });

  it('Empty user should return correct error message', async () => {
    let validatedUser = await validateCreatedUser(null);
    assert.equal(validatedUser.error, 'User could not be created');
  });
});

describe('Password hashing', () => {
  const hashPassword = userController.__get__('hashPassword');
  const compareHashes = userController.__get__('compareHashes');

  it('Hashed password is 60 characters long', async () => {
    let hashedPassword = await hashPassword('60characters');
    assert.equal(hashedPassword.length, 60);
  });

  it('Hashed password is not the same as cleartext', async() => {
    let hashedPassword = await hashPassword('cleartext');
    assert.notEqual(hashedPassword, 'cleartext');
  });

  it('Hashed password correctly compares to real password', async () => {
    let hashedPassword = await hashPassword('mySecretPassword1');
    let compared = await compareHashes('mySecretPassword1', hashedPassword);
    assert.isTrue(compared);
  });

  it('Hashed password does not compare to other password', async () => {
    let hashedPassword = await hashPassword('mySecretPassword1');
    let compared = await compareHashes('mySecretPassword2', hashedPassword);
    assert.isFalse(compared);
  })
});