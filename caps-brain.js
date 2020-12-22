const events = require('./events-pool');

require('./modules/driver');
require('./modules/vendor');

function logger (event, payload){
  let timeStamp = Date.now().toString();
  console.log('EVENT', timeStamp, payload);
}
events.on('pickup', (payload) => logger('pickup', payload));
events.on('inTransit', (payload) => logger('inTransit', payload));

events.on('delivered', (payload) => {
logger('delivered', payload);
  console.log('Thank you!');
});
