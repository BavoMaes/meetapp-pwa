const canvas = require('canvas');
const { Canvas, Image, ImageData } = canvas

const toImageElement = (source, width, height) => {
  let image = new Image(width, height);
  image.src = source;
  return image
}

module.exports = {
  toImageElement: toImageElement
}