const assert = require('assert');
const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

const matchModel = require('../server/models/match');

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

  describe('Match model', () => {
    it('Create a valid match', async () => {
      try {
        assert.ok(await matchModel.create({
          users: [{
            _id: '5f2d37469fe49e0c6a1bd934'
          }]
        }))
      } catch (error) {
        console.log(error.message);
        assert.fail();
      }
      
    });

    it('Error on create invalid match', async () => {
      try {
        await matchModel.create({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Update a match', async () => {
      try {
        await matchModel.update({
          _id: '5f329eb58fa21323bdaed167',
          users: [{
            _id: '5f2d37469fe49e0c6a1bd934'
          }]
        });
        assert.fail();
      } catch (error) {
        assert.equal('No valid document found for the given ID', error.message);
      }
    });

    it('Error on update invalid match', async () => {
      try {
        await matchModel.update({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Find a match', async () => {
      try {
        await matchModel.findById({
          _id: '5f329eb58fa21323bdaed167',
          users: [{
            _id: '5f2d37469fe49e0c6a1bd934'
          }]
        });
        assert.fail();
      } catch (error) {
        assert.equal('No valid document found for the given ID', error.message);
      }
    });

    it('Error on find invalid match by ID', async () => {
      try {
        await matchModel.findById({
          test: 'Invalid schema'
        });
        assert.fail();
      } catch (error) {
        assert.ok(error instanceof Error);
      }
    });

    it('Delete a match', async () => {
      try {
        await matchModel.delete({
          _id: '5f329eb58fa21323bdaed167',
          users: [{
            _id: '5f2d37469fe49e0c6a1bd934'
          }]
        });
        assert.fail();
      } catch (error) {
        assert.equal('Failed to delete document', error.message);
      }
    });

    it('Error on delete invalid match', async () => {
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
});