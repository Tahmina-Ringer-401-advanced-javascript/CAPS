'use strict';

const port = process.env.PORT ||3000;
const io = require('socket.io')(port);


const inTransitSub = io.of(`/inTransit-sub`);
console.log('caps-brain.js');

io.on('connection', (socket) => {
  console.log('Welcome to the HUB, your socket id is:', socket.id);
})

inTransitSub.on('connection', (socket) => {
  
  socket.on('pickup', (payload) => {
    console.log('EVENT:', { events : 'pickup', time : new Date().toString(), payload})
    inTransitSub.emit('pickup', payload)
  });
  
  socket.on('inTransit', (payload) => {
    console.log('EVENT:', { events : 'inTransit', time : new Date().toString(), payload})
    inTransitSub.emit('inTransit', payload);
  });
  
  socket.on('delivered', (payload) => {
    console.log('EVENT:', { events : 'delivered', time : new Date().toString(), payload})
    inTransitSub.emit('delivered', payload);
  });
})









