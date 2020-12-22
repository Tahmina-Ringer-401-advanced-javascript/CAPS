'use strict';

const faker = require('faker')
const events = require('../events-pool');

  const storeName = process.env.STORE_NAME;
  const orderAdress = faker.address.streetAddress();
  const orderName = faker.name.findName();
  const orderId = faker.random.uuid();

  
  setInterval(() => {
  let payload = { 
    name : storeName, 
    address : orderAdress, 
    cutomer : orderName, 
    orderId : orderId 
  }
  events.emit('pickup', payload);
}, 5000);

events.on('delivered', thankYouHandler);

function thankYouHandler(payload) {
  console.log(`Thank you! ${payload.orderId}`);
}

module.exports = thankYouHandler;