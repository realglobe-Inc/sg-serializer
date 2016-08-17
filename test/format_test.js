/**
 * Test case for format.
 * Runs with mocha.
 */
'use strict'

const format = require('../lib/format.js')
const assert = require('assert')
const co = require('co')

describe('format', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Format', () => co(function * () {
    let { meta, payload } = format({
      d1: new Date()
    })
    assert.ok(payload)
    assert.deepEqual(meta, { '/d1': 'builtin:date' })
  }))
})

/* global describe, before, after, it */
