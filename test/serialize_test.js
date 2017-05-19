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
      nested: {
        date02: new Date('1985/08/26'),
        date03: [ new Date('1985/08/27'), new Date('1985/08/28') ]
      },
      error01: new Error(),
      regex01: /^hoge$/g,
      regex02: new RegExp('^hoge$', 'g'),
      nan01: 100 / 'hoge',
      nan02: NaN,
      symbol01: Symbol('hoge'),
      symbol02: Symbol('hoge')
    }, {
      indent: 2
    })
    assert.ok(serialized)
    // console.log(serialized)
    assert.equal(typeof serialized, 'string')

    let d = deserialize(serialized)
    assert.ok(d)
    assert.equal(typeof d, 'object')
    assert.ok(!d.$$types)
    assert.ok(d.date01 instanceof Date)
    assert.equal(d.nested.date02 - new Date('1985/08/26'), 0)
    assert.equal(d.nested.date03[ 0 ] - new Date('1985/08/27'), 0)
    assert.ok(d.regex01 instanceof RegExp)
    assert.ok(d.regex02 instanceof RegExp)

    assert.ok(d.regex01.test('hoge'))
    assert.ok(!d.regex01.test('not_hoge'))
    assert.ok(d.regex02.test('hoge'))
    assert.ok(!d.regex02.test('not_hoge'))

    assert.equal(String(d.symbol01), 'Symbol(hoge)')
  }))
})

/* global describe, before, after, it */
