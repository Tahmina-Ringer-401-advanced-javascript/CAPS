'use strict';

const capsHandler = require('../caps-brain');
const driverHandler = require('../modules/driver/driverdriver');
const vendorHandler = require('../modules/vendor/vendorvendor');
const io = require('socket.io-client');
const host = 'http://localhost:3000';

describe('event handler', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('thank you handler', () => {
    events.emit('delivered', {orderId: 1});
    expect(consoleSpy).toBeCalled();
  });
  it('pickup handler', () => {
    events.emit('pickup', {orderId: 1});
    jest.useFakeTimers();
    expect(consoleSpy).toBeCalled();
  });
  it('Delivered Handler', () => {
    events.emit('delivered', {orderId: 1});
    expect(consoleSpy).toBeCalled();
  })
})
