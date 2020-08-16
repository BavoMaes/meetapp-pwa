const faceapi = require('face-api.js');

const detectFace = async (input) => {
  try {
    let detectedFace = await faceapi.detectSingleFace(input);
    if (detectedFace && detectedFace.hasOwnProperty('_score') && detectedFace._score > 0.5) {
      return true
    }
    return false;
  } catch (error) {
    throw error;
  }
}

const recognizeFace = async () => {
  try {
      
  } catch (error) {
    console.error(error.message);
    console.error('Something went wrong when loading the models');
  }
}

module.exports = {
  detect: detectFace,
  recognize: recognizeFace
}