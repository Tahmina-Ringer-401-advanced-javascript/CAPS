'use strict';

const { beforeEach, afterEach, it } = require('@jest/globals');
const { describe } = require('yargs');
const capsHandler = require('../caps-brain');
const driverHandler = require('../driver');
const vendorHandler = require('../vendor');

describe('event handler', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  })
  afterEach(() => {
    consoleSpy.mockRestore();
  })
  it('thank'
})