/**
 * Parse data with meta
 * @function parse
 * @returns {Object}
 */
'use strict'

const { get, set } = require('json-pointer')
const defaultConverters = require('./converters')

/** @lends parse */
function parse (payload, meta, options = {}) {
  if (Array.isArray(payload)) {
    return payload.map((data) => parse(data, meta, options))
  }
  let { converters = defaultConverters } = options

  payload = Object.assign({}, payload)
  for (let pointer of Object.keys(meta || {})) {
    let typeName = meta[ pointer ]
    let converter = converters[ typeName ]
    if (!converter) {
      throw new Error(`[sg-serializer] Unknown type: ${typeName} `)
    }
    let value = get(payload, pointer)
    set(payload, pointer, converter.parse(value))
  }
  return payload
}

module.exports = parse
