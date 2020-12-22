'use strict';

const events = require('../events-pool');

events.emit('pickup', { payload })
events.emit('inTransit', { payload })
events.emit('delivered', { payload })


