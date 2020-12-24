'use strict';

const port = process.env.PORT ||3000;
const io = require('socket.io')(port);

io.on('connection', (socket) => {
  console.log('Welcome to the HUB, your socket id is:', socket.id);
})

const capsConnect = io.of(`/caps`);

capsConnect.on('connection', (socket) => {
  console.log('Welcome to the CAPS name space')
  socket.on('join', room => {
    console.log(`${socket.id} is joining ${room}`);
    socket.join(room);
  })
})

capsConnect.on('connection', (socket) => {
  
  socket.on('pickup', (payload) => {
    console.log('EVENT:', { events : 'pickup', time : new Date().toString(), payload})
    capsConnect.emit('pickup', payload)
  });
  
  socket.on('inTransit', (payload) => {
    console.log('EVENT:', { events : 'inTransit', time : new Date().toString(), payload})
    capsConnect.emit('inTransit', payload);
  });
  
  socket.on('delivered', (payload) => {
    console.log('EVENT:', { events : 'delivered', time : new Date().toString(), payload})
    capsConnect.emit('delivered', payload);
  });
})









