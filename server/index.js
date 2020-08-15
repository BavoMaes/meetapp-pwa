const express = require('express');
const socket = require('socket.io');
const socketAuth = require('socketio-auth');

const database = require('./config/database');
const preAuthenticate = require('./socketio/preauth');
const authenticate = require('./socketio/auth');
const postAuthenticate = require('./socketio/postauth');
const disconnect = require('./socketio/disconnect');

const port = process.env.PORT || 5000;

/* Initialize database */

database.init();

/* Start Express server */

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