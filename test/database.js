const rewire = require('rewire');
const assert = require('assert');
const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

const databaseConfig = rewire('../server/config/database');

const mockgoose = new Mockgoose(mongoose);

describe('Database', () => {
  const initialize = databaseConfig.__get__('initializeDatabase');

  before(async () => {
      await mockgoose.prepareStorage();
  });

  it('Initialize database', async() => {
    assert.doesNotThrow(await initialize);
  });
});