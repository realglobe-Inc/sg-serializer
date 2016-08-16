/**
 * Serializer for SUGOS
 * @module sg-serializer
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get deserialize () { return d(require('./deserialize')) },
  get serialize () { return d(require('./serialize')) },
  get types () { return d(require('./types')) }
}
