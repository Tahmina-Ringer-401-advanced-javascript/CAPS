'use strict';

const { emit, on } = require('process');
const events = require('../events-pool');

on.events('pickup', pickUpHandler);
on.events('delivered', deliveredHandler);

function pickUpHandler (payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.ORDER_ID}`);
    events.emit('inTransit', payload);
  }, 1000);
};


function deliveredHandler (payload) {
  setTimeout(() => {
    console.log(`Delivered! ${payload.ORDER_ID}`);
    events.emit('delivered', payload)
  }, 3000)
}
