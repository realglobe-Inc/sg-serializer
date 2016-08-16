/**
 * Test case for serialize.
 * Runs with mocha.
 */
'use strict'

const serialize = require('../lib/serialize.js')
const deserialize = require('../lib/deserialize.js')
const assert = require('assert')
const co = require('co')

describe('serialize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Serialize', () => co(function * () {
    let serialized = serialize({
      date01: new Date(),
      date02: new Date('1985/08/26'),
      error01: new Error()
    })
    assert.ok(serialized)
    assert.equal(typeof serialized, 'string')

    let deserialized = deserialize(serialized)
    assert.ok(deserialized)
    assert.equal(typeof deserialized, 'object')
    assert.ok(!deserialized.$$types)
    assert.ok(deserialized.date01 instanceof Date)
    assert.equal(deserialized.date02 - new Date('1985/08/26'), 0)
  }))
})

/* global describe, before, after, it */
