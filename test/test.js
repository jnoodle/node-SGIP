'use strict';

const expect = require('chai').expect;
const sgip = require('../index');

describe('node-SGIP', function () {

  it('test', function () {
    expect(sgip.test()).to.equal(true);
  });

});
