/**
 * Deserialize serialized data
 * @function deserialize
 * @param {string} serialized - Serialized string
 * @param {Object} [options={}] - Optional settings
 * @returns {Object} - Deserialize data
 */
'use strict'

const parse = require('./parse')

const { has, get, remove } = require('json-pointer')
/** @lends deserialize */
function deserialize (serialized, options = {}) {
  let {
    metaPointer = '/$$types',
    converters
  } = options

  let payload = JSON.parse(serialized)
  let hasMeta = has(payload, metaPointer)
  let meta = hasMeta && get(payload, metaPointer)
  if (hasMeta) {
    remove(payload, metaPointer)
  }
  return parse(payload, meta, { converters })
}

module.exports = deserialize
