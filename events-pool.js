'use strict';

const Events = require('events');

const events = new events();//makes new event pool -- Only need to use one

module.exports = events;