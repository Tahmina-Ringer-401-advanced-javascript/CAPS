'use strict';

const io = require('socket.io-client');
const host = "http://localhost:3000/caps";
// const deliveredSub = io.connect(`${host}/delivered-sub`);
const capsConnect = io.connect(host);

capsConnect.on('pickup', pickUpHandler);
// capsConnect.on('delivered', deliveredHandler);

function pickUpHandler (payload) {
  console.log('console logging pickUpHandler')
  setTimeout(() => {
    console.log(`DRIVER: picking up ${payload.orderId}`);
    capsConnect.emit('inTransit', payload);
  }, 1500);

  setTimeout(() => {
    console.log(`Delivered! ${payload.orderId}`);
    capsConnect.emit('delivered', payload)
  }, 3000)
};


