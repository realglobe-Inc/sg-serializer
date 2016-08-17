/**
 * Deserialize serialized data
 * @function deserialize
 * @param {string} serialized - Serialized string
 * @param {Object} [options={}] - Optional settings
 * @returns {Object} - Deserialize data
 */
'use strict'

const parse = require('./parse')

/** @lends deserialize */
function deserialize (serialized, options = {}) {
  let { metaKey = '$$types', converters } = options

  let payload = JSON.parse(serialized)

  let meta = payload[ metaKey ]
  delete payload[ metaKey ]
  return parse(payload, meta, { converters })
}

module.exports = deserialize
