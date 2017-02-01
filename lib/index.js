/**
 * Serializer for SUGOS
 * @module sg-serializer
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get converters () { return d(require('./converters')) },
  get deserialize () { return d(require('./deserialize')) },
  get format () { return d(require('./format')) },
  get parse () { return d(require('./parse')) },
  get serialize () { return d(require('./serialize')) }
}
