const express = require('express');
const socket = require('socket.io');
const socketAuth = require('socketio-auth');

const database = require('./config/database');
const faceRecognition = require('./config/faceapi');
const preAuthenticate = require('./socketio/preauth');
const authenticate = require('./socketio/auth');
const postAuthenticate = require('./socketio/postauth');
const disconnect = require('./socketio/disconnect');

const port = process.env.PORT || 5000;

/* Initialize database */
(async () => {
  try {
    await database.init();
    console.log('Connected to database');
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
})();

/* Initialize face recognition */

(async () => {
  try {
    await faceRecognition.init();
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
})();

// /* Start Express server */

const app = express();
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

/* Start Socket.io */

const io = socket(server);

/* Websocket functionality before client is authenticated */

io.on('connection', (socket) => {
  console.log('A user connected.');
  preAuthenticate.listen(socket)
});

/* Websocket funcionality when client authenticates */

socketAuth(io, {
  authenticate: authenticate.listen,
  postAuthenticate: postAuthenticate.listen,
  disconnect: disconnect.listen,
  timeout: 'none'
});
