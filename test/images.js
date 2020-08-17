const rewire = require('rewire');
const assert = require('chai').assert;

const imageService = rewire('../server/services/image');

describe('Image Service', () => {
  it ('String as witdth should throw error', () => {
    try {
      let myImage = imageService.toImageElement('d', 'width', 100)
      assert.fail();
    } catch (error) {
      assert.instanceOf(error, Error);
    }
  });
  it ('String as height should throw error', () => {
    try {
      let myImage2 = imageService.toImageElement('d', 100, 'height');
      assert.fail();
    } catch (error) {
      assert.instanceOf(error, Error);
    }
  })
})