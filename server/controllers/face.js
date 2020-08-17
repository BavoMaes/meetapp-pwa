const imageService = require('../services/image');
const faceService = require('../services/face');

const recognizeFace = async (input, width, height) => {
  try {
    let image = imageService.toImageElement(input, width, height);
    return await faceService.recognize(image);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  recognize: recognizeFace
}
