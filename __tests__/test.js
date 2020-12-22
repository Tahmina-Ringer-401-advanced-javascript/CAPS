'use strict';

const { beforeEach, afterEach, it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const capsHandler = require('../caps-brain');
const driverHandler = require('../driver');
const events = require('../events-pool');
const vendorHandler = require('../vendor');

describe('event handler', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('thank you handler', () => {
    events.emit('delivered', `${orderId}`);
    expect(consoleSpy).toBeCalled();
  });
  it('pickup handler', () => {
    events.emit('pickup', `${orderId}`);
    expect(consoleSpy).toBeCalled();
  });
  it('Delivered Handler', () => {
    events.emit('delivered', `${orderId}`);
    expect(consoleSpy).toBeCalled();
  })
})
