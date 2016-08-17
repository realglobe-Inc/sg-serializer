/**
 * Serialize an object
 * @function serialize
 * @param {Object} data - Data to serialize
 * @param {Object} [options={}] - Optional settings.
 * @returns {string} - Serialized string
 *
 */
'use strict'

const format = require('./format')

/** @lends serialize */
function serialize (data, options = {}) {
  let {
    indent = null,
    metaKey = '$$types',
    converters
  } = options

  let { payload, meta } = format(data, { converters })
  return JSON.stringify(
    Object.assign(payload, { [metaKey]: meta })
    , null, indent)
}

module.exports = serialize
