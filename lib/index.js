/**
 * Serializer for SUGOS
 * @module sg-serializer
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get serialize () { return d(require('./serialize')) }
}
