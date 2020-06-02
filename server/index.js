const express = require('express');
const socket = require('socket.io');

const database = require('./config/database');
const socketListener = require('./socketio/listener');

const port = process.env.PORT || 5000;

/* Initialize database */

database.init();

/* Start Express server */

const app = express();
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

/* Start Socket.io */

const io = socket(server);
io.on('connection', (socket) => {
  socketListener.listen(socket);
})


