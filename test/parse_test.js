/**
 * Test case for parse.
 * Runs with mocha.
 */
'use strict'

const parse = require('../lib/parse.js')
const assert = require('assert')
const co = require('co')

describe('parse', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Parse', () => co(function * () {
    {
      let parsed = parse([
        'foo',
        'bar',
        'baz'
      ])
      assert.deepEqual(parsed, [ 'foo', 'bar', 'baz' ])
    }
    {
      let parsed = parse({
        foo: 'bar',
        baz: new Date()
      })
      assert.ok(parsed.foo)
      assert.ok(parsed.baz)
    }
  }))
})

/* global describe, before, after, it */
