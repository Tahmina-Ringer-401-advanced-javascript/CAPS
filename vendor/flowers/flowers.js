'use strict';

require('dotenv').config();
const faker = require('faker');
const io = require('socket.io-client');
const host = "http://localhost:3000/caps";
const capsConnect = io.connect(host);
const storeName = '1-206-flower';
const order = process.argv.splice(2)[0];
console.log(order)

capsConnect.on('delivered', thankYouHandler);

function thankYouHandler(payload) {
  console.log(`Item has been delivered ${payload.orderId}`)
    console.log(`Thank you! ${payload.orderId}`);
}

capsConnect.emit('join',process.env.STORE);
capsConnect.emit('getall');

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

capsConnect.on('order', message => {
  console.log('in the VENDOR - New order for delivery', message.payload);
  capsConnect.emit('received', message);
})

capsConnect.on('order', message => {
  console.log('in the VENDOR - Order has been DELIVERED', message.payload);
  capsConnect.emit('received', message.payload)
})

// capsConnect.on('added', () => {
//   console.log('in the VENDOR - heard ADDED so I am disconnecting');
//   capsConnect.disconnect();
// })

