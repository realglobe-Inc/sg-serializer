/**
 * Serialize an object
 * @function serialize
 * @param {Object} data - Data to serialize
 * @param {Object} [options={}] - Optional settings.
 * @returns {string} - Serialized string
 *
 */
'use strict'

const { set } = require('json-pointer')
const format = require('./format')

/** @lends serialize */
function serialize (data, options = {}) {
  let {
    indent = null,
    metaPointer = '/$$types',
    converters
  } = options

  let { payload, meta } = format(data, { converters })
  set(payload, metaPointer, meta)
  return JSON.stringify(payload, null, indent)
}

module.exports = serialize
