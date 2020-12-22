'use strict';

const Events = require('events');

const events = new Events();//makes new event pool -- Only need to use one

module.exports = Events;