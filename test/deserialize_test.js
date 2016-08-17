/**
 * Test case for deserialize.
 * Runs with mocha.
 */
'use strict'

const deserialize = require('../lib/deserialize.js')
const assert = require('assert')
const co = require('co')

describe('deserialize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Deserialize', () => co(function * () {
    let deserialized = deserialize('[{"foo": "bar"}]')
    assert.deepEqual(deserialized, [ { foo: 'bar' } ])
  }))
})

/* global describe, before, after, it */
