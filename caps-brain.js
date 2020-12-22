const events = require('./event-pool');

require('./driver');
require('./vendor');

function logger (events, payload){
  let timeStamp = Math.floor(Date.now() / 1000);
  console.log('EVENT', timeStamp, payload);
}
events.on('pickup', (payload) => logger('pickup', payload));
events.on('inTransit', (payload) => logger('inTransit', payload));

events.on('delivered', (payload) => {
logger('delivered', payload)
  console.log('Thank you!');
});
