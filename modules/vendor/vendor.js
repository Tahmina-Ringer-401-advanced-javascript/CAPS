'use strict';

require('dotenv').config();
const io = require('socket.io-client');
const host = "http://localhost:3000/inTransitSub";
const faker = require('faker');
const inTransitSub = io.connect(host);
const storeName = process.env.STORE;

inTransitSub.on('delivered', thankYouHandler);

function thankYouHandler(payload) {
  console.log(`Item has been delivered ${payload.orderId}`)
    console.log(`Thank you! ${payload.orderId}`);
}
setInterval(() => {
  console.log(storeName);
  let newOrder = { 
    storeName : storeName,
    address : `${faker.address.city()}, ${faker.address.stateAbbr()}`, 
    cutomer : `${faker.name.firstName()}, ${faker.name.lastName()}`, 
    orderId : faker.random.uuid()
  }
  console.log('console logging stuff')
  inTransitSub.emit('pickup', newOrder);
  console.log('order picked up and in transit!')
}, 5000);


