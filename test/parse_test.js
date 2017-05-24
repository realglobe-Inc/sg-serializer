/**
 * Test case for parse.
 * Runs with mocha.
 */
'use strict'

const parse = require('../lib/parse.js')
const { ok, equal, deepEqual } = require('assert')
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
      deepEqual(parsed, [ 'foo', 'bar', 'baz' ])
    }
    {
      let parsed = parse({
        foo: 'bar',
        baz: new Date()
      })
      ok(parsed.foo)
      ok(parsed.baz)
      ok(parsed.baz instanceof Date)
    }

    {
      let parsed = parse([ {
        foo: 'bar',
        baz: new Date()
      } ])
      ok(Array.isArray(parsed))
      ok(parsed[ 0 ].foo)
      ok(parsed[ 0 ].baz)
      ok(parsed[ 0 ].baz instanceof Date)
    }
  }))
})

/* global describe, before, after, it */
