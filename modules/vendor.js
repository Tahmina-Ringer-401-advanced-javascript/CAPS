'use strict';

const faker = require('faker');
const events = require('../events-pool');
  
  setInterval(() => {
  let payload = { 
    name : process.env.STORE_NAME, 
    address : `${faker.address.city()} ${faker.address.stateAbbr()}`, 
    cutomer : `${faker.name.firstName()} ${faker.name.lastName()}`, 
    orderId : faker.random.uuid() 
  }
  events.emit('pickup', payload);
}, 5000);

events.on('delivered', thankYouHandler);

function thankYouHandler(payload) {
  console.log(`Thank you! ${payload.orderId}`);
}

