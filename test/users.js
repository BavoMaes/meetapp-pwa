const rewire = require('rewire');
const assert = require('assert');
const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

const userService = rewire('../server/services/user');
const userModel = require('../server/models/user');

const mockgoose = new Mockgoose(mongoose);

describe('Users', () => {

  before(async () => {
    if (mockgoose.helper.isMocked() === false) {
      await mockgoose.prepareStorage();
      await mongoose.connect('mongodb://fakeserver.com/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }
  });

  describe('User model', () => {
    it('Create a valid user', async () => {
      try {
        assert.ok(await userModel.create({
          email: 'test@mocha.com',
          password: 'mocha',
          firstname: 'Mocha',
          lastname: 'test',
          jobTitle: 'Tester',
          employer: 'Mocha'
        }))
      } catch (error) {
        console.log(error.message);
        assert.fail();
      }
      
    });

    it('Error on create invalid user', async () => {
      try {
        await userModel.create({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Update a user', async () => {
      try {
        await userModel.update({
          _id: '5f2d37469fe49e0c6a1bd934',
          email: 'test@mocha.com',
          password: 'mocha',
          firstname: 'Mocha',
          lastname: 'test',
          jobTitle: 'Tester',
          employer: 'Mocha'
        });
        assert.fail();
      } catch (error) {
        assert.equal('No valid document found for the given ID', error.message);
      }
    });

    it('Error on update invalid user', async () => {
      try {
        await userModel.update({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Find a user', async () => {
      try {
        await userModel.findById({
          _id: '5f2d37469fe49e0c6a1bd934',
          email: 'test@mocha.com',
          password: 'mocha',
          firstname: 'Mocha',
          lastname: 'test',
          jobTitle: 'Tester',
          employer: 'Mocha'
        });
        assert.fail();
      } catch (error) {
        assert.equal('No valid document found for the given ID', error.message);
      }
    });

    it('Error on find invalid user by ID', async () => {
      try {
        await matchModel.findById({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Delete a user', async () => {
      try {
        await userModel.delete({
          _id: '5f2d37469fe49e0c6a1bd934',
          email: 'test@mocha.com',
          password: 'mocha',
          firstname: 'Mocha',
          lastname: 'test',
          jobTitle: 'Tester',
          employer: 'Mocha'
        });
        assert.fail();
      } catch (error) {
        assert.equal('Failed to delete document', error.message);
      }
    });

    it('Error on delete invalid user', async () => {
      try {
        await matchModel.delete({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

  });

  describe('Password hashing', () => {
    const hashPassword = userService.__get__('hashPassword');
    const compareHashes = userService.__get__('compareHashes');

    it('Hashed password is 60 characters long', async () => {
      let hashedPassword = await hashPassword('60characters');
      assert.equal(hashedPassword.length, 60);
    });

    it('Hashed password is not the same as cleartext', async () => {
      let hashedPassword = await hashPassword('cleartext');
      assert.notEqual(hashedPassword, 'cleartext');
    });

    it('Hashed password correctly compares to real password', async () => {
      let hashedPassword = await hashPassword('mySecretPassword1');
      let compared = await compareHashes('mySecretPassword1', hashedPassword);
      assert.equal(compared, true);
    });

    it('Hashed password does not compare to other password', async () => {
      let hashedPassword = await hashPassword('mySecretPassword1');
      let compared = await compareHashes('mySecretPassword2', hashedPassword);
      assert.equal(compared, false);
    })
  });
})