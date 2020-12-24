'use strict';

const uuid = require('uuid').v4
const port = process.env.PORT ||3000;
//this is the '/' or (home) route
const io = require('socket.io')(port);

// Clobal Hub (/) -- all connections and all events go to everyone
io.on('connection', (socket) => {
  console.log('Welcome to the HUB, your socket id is:', socket.id);
})

//namespaces are segments of the server or routes
// Thes allow users to connect to the server, and only pay attention to what is happening in these areas
const capsConnect = io.of(`/caps`);

capsConnect.on('connection', (socket) => {
  console.log('Welcome to the CAPS name space')
  socket.on('join', room => {
    console.log(`${socket.id} is joining ${room}`);
    socket.join(room);
  })
})

capsConnect.on('connection', (socket) => {
  
  socket.on('pickup', (payload) => {
    console.log('EVENT:', { events : 'pickup', time : new Date().toString(), payload})
    capsConnect.emit('pickup', payload)
  });
  
  socket.on('inTransit', (payload) => {
    console.log('EVENT:', { events : 'inTransit', time : new Date().toString(), payload})
    capsConnect.emit('inTransit', payload);
  });
  
  socket.on('delivered', (payload) => {
    console.log('EVENT:', { events : 'delivered', time : new Date().toString(), payload})
    capsConnect.emit('delivered', payload);
  });
})

const queue = {
  orders: {}
}

capsConnect.on('connection', socket => {
  socket.on('new order', payload => {
    console.log('in the HUB - heard a NEW ORDER', payload);

    //to get a unique id 
    const id = uuid();
    //save the payload to the order queue with the id as the key and payload as the value
    queue.orders[id] = payload;
    //send out to the socket space that the order was added
    socket.emit('added');
    //send out order with the id and payload to the name space 
    capsConnect.emit('orders', {id, payload});
  });

  socket.on('getall', () => {
    console.log('in the HUB - listening to GETALL');
    //loop through all of the keys in the chore with the id and payload
    Object.keys(queue.orders).forEach(id => {
      //for each id, emit order with the id and payload
      socket.emit('orders', {id, payload: queue.orders[id]});
    })
  })
  //if there is a received message, we know that the vendor/driver got the order and dont need to repeat and can delete from the queue 
  socket.on('received', message => {
    console.log('in the HUB - order RECEIVED', message);
    delete queue.orders[message.id];
  })
  socket.on('delivered', payload => {
    const id = uuid();
    console.log('Order has been delivered!', payload)
    socket.emit('delivered', {id, payload: queue.orders[id]});
  })
})





