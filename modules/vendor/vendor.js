'use strict';

require('dotenv').config();
const faker = require('faker');
const io = require('socket.io-client');
const host = "http://localhost:3000/caps";
const capsConnect = io.connect(host);
const storeName = process.env.STORE;

capsConnect.on('delivered', thankYouHandler);

function thankYouHandler(payload) {
  console.log(`Item has been delivered ${payload.orderId}`)
    console.log(`Thank you! ${payload.orderId}`);
}

capsConnect.emit('join',process.env.STORE);

setInterval(() => {
  console.log(storeName);
  let newOrder = { 
    storeName : storeName,
    address : `${faker.address.city()}, ${faker.address.stateAbbr()}`, 
    cutomer : `${faker.name.firstName()}, ${faker.name.lastName()}`, 
    orderId : faker.random.uuid()
  }
  console.log('console logging stuff')
  capsConnect.emit('pickup', newOrder);
  console.log('order picked up and in transit!')
}, 5000);


