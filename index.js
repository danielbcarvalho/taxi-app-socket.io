const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

let taxiSocket = null;

io.on('connection', (socket) => {
  console.log('L', 'a user connected =D');
  socket.on('taxiRequest', (routeResponse) => {
    console.log("Someone is looking for a taxi!", )
    if (taxiSocket != null) {
      taxiSocket.emit('taxiRequest', routeResponse)
    }
  });

  socket.on('lookingForPassengers', () => {
    console.log("Looking for passengers!", )
    taxiSocket = socket;
  })
});

server.listen(port, () => console.log('L', 'server running...'));
