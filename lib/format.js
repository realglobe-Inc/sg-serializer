/**
 * Format data to payload and meta
 * @function format
 * @returns {Object}
 */
'use strict'

const { dict, set } = require('json-pointer')
const defaultConverters = require('./converters')

/** @lends format */
function format (payload, options = {}) {
  let { converters = defaultConverters } = options

  payload = Array.isArray(payload) ? [ ...payload ] : Object.assign({}, payload)
  let pointed = dict(payload)
  let meta = {}
  for (let pointer of Object.keys(pointed)) {
    let value = pointed[ pointer ]
    for (let typeName of Object.keys(converters)) {
      let converter = converters[ typeName ]
      if (converter.is(value)) {
        set(payload, pointer, converter.format(value))
        meta[ pointer ] = typeName
      }
    }
  }
  return { payload, meta }
}

module.exports = format
