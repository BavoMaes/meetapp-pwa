const faceapi = require('face-api.js');
const canvas = require('canvas');

let faceMatcher;

const recognizeFace = async (input) => {
  try {
    let detectedFace = await faceapi.detectSingleFace(input).withFaceLandmarks().withFaceDescriptor();
    if (detectedFace) {
      let match = await faceMatcher.findBestMatch(detectedFace.descriptor);
      return match._label;
    }
    return false;
  } catch (error) {
    throw error;
  }
}

const trainModel = async () => {
  try {
    let descriptions = [];
    for (let i = 1; i < 2; i++) {
      let img = await canvas.loadImage(`./server/faceapi/faces/${i}.jpg`);
      let detectedFace = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
      descriptions.push(detectedFace.descriptor);
    }
    let trainedModel = new faceapi.LabeledFaceDescriptors('5f383cc37705751e41b5edba', descriptions);
    faceMatcher = new faceapi.FaceMatcher(trainedModel);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  recognize: recognizeFace,
  trainModel: trainModel
}