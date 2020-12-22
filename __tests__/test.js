'use strict';

const capsHandler = require('../caps-brain');
const driverHandler = require('../modules/driver');
const events = require('../events-pool');
const vendorHandler = require('../modules/vendor');

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
