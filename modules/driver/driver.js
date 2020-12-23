'use strict';

const io = require('socket.io-client');
const host = "http://localhost:3000/inTransitSub";
// const deliveredSub = io.connect(`${host}/delivered-sub`);
const inTransitSub = io.connect(host);

console.log('driver');
inTransitSub.on('pickup', pickUpHandler);
// inTransitSub.on('delivered', deliveredHandler);

function pickUpHandler (payload) {
  console.log('console logging pickUpHandler')
  setTimeout(() => {
    console.log(`DRIVER: picking up ${payload.orderId}`);
    inTransitSub.emit('inTransit', payload);
  }, 1500);

  setTimeout(() => {
    console.log(`Delivered! ${payload.orderId}`);
    inTransitSub.emit('delivered', payload)
  }, 3000)
};


// function deliveredHandler (payload) {
// }
