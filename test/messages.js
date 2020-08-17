const assert = require('assert');
const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

const messageModel = require('../server/models/message');

const mockgoose = new Mockgoose(mongoose);

describe('Messages', () => {
  before(async () => {
    if (mockgoose.helper.isMocked() === false) {
      await mockgoose.prepareStorage();
      await mongoose.connect('mongodb://fakeserver.com/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }
  });

  describe('Messages model', () => {
    it('Create a valid message', async () => {
      assert.ok(await messageModel.create({
        matchId: '5f2d37469fe49e0c6a1bd940',
        userId: '5f2d37469fe49e0c6a1bd934',
        content: 'Testing with mock database'
      }))
    });

    it('Error on create invalid message', async () => {
      try {
        await messageModel.create({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Update a message', async () => {
      try {
        await messageModel.update({
          _id: '5f329eb58fa21323bdaed167',
          matchId: '5f2d37469fe49e0c6a1bd940',
          userId: '5f2d37469fe49e0c6a1bd934',
          content: 'Testing with mock database'
        });
        assert.fail();
      } catch (error) {
        assert.equal('No valid document found for the given ID', error.message);
      }
    });

    it('Error on update invalid message', async () => {
      try {
        await messageModel.update({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Find a message', async () => {
      try {
        await messageModel.findById({
          _id: '5f329eb58fa21323bdaed100',
          matchId: '5f2d37469fe49e0c6a1bd940',
          userId: '5f2d37469fe49e0c6a1bd934',
          content: 'Testing with mock database'
        });
        assert.fail();
      } catch (error) {
        assert.equal('No valid document found for the given ID', error.message);
      }
    });

    it('Error on find invalid message by ID', async () => {
      try {
        await messageModel.findById({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Delete a message', async () => {
      try {
        await messageModel.delete({
          _id: '5f329eb58fa21323bdaed100',
          matchId: '5f2d37469fe49e0c6a1bd940',
          userId: '5f2d37469fe49e0c6a1bd934',
          content: 'Testing with mock database'
        });
        assert.fail();
      } catch (error) {
        assert.equal('Failed to delete document', error.message);
      }
    });

    it('Error on delete invalid message', async () => {
      try {
        await messageModel.delete({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

  });
});