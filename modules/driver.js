'use strict';

const { emit, on } = require('process');
const events = require('../events-pool');

events.on('pickup', pickUpHandler);
events.on('delivered', deliveredHandler);

function pickUpHandler (payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('inTransit', payload);
  }, 1000);
};


function deliveredHandler (payload) {
  setTimeout(() => {
    console.log(`Delivered! ${payload.orderId}`);
    events.emit('delivered', payload)
  }, 3000)
}

module.exports = { deliveredHandler, pickUpHandler}