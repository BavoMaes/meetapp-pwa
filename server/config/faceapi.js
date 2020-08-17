require('@tensorflow/tfjs-node');
const canvas = require('canvas');
const faceapi = require('face-api.js');
const fetch = require('node-fetch');

const faceService = require('../services/face');

const { Canvas, Image, ImageData } = canvas

const inititalizeFaceRecognition = async () => {
  try {
    faceapi.env.monkeyPatch({ Canvas, Image, ImageData });
    faceapi.env.monkeyPatch({ fetch: fetch });
    await faceapi.nets.ssdMobilenetv1.loadFromDisk('./server/faceapi/models');
    await faceapi.nets.faceLandmark68Net.loadFromDisk('./server/faceapi/models');
    await faceapi.nets.faceRecognitionNet.loadFromDisk('./server/faceapi/models');
    await faceService.trainModel();
    console.log('Face recognition initialized.');
  } catch (error) {
    throw error
  }
}

module.exports = {
  init: inititalizeFaceRecognition
}