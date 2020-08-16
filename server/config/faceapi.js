require('@tensorflow/tfjs-node');
const canvas = require('canvas');
const faceapi = require('face-api.js');

const { Canvas, Image, ImageData } = canvas

const inititalizeFaceRecognition = async () => {
  try {
    faceapi.env.monkeyPatch({ Canvas, Image, ImageData });
    await faceapi.nets.ssdMobilenetv1.loadFromDisk('./server/public/models');
    console.log('Face recognition initialized.');
  } catch (error) {
    throw error
  }
}

module.exports = {
  init: inititalizeFaceRecognition
}