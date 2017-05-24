/**
 * Parse data with meta
 * @function parse
 * @returns {Object}
 */
'use strict'

const { get, set } = require('json-pointer')
const defaultConverters = require('./converters')

const parseObject = (payload, meta, converters) => {
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

/** @lends parse */
function parse (payload, meta, options = {}) {
  let { converters = defaultConverters } = options
  let type = Array.isArray(payload) ? 'array' : typeof payload

  switch (type) {
    case 'object':
    case 'function': {
      let parsedPayload = parseObject(payload, meta, converters)
      return parsedPayload
    }
    case 'array': {
      let { length } = payload
      let parsedPayload = parseObject(payload, meta, converters)
      parsedPayload.length = length
      parsedPayload = Array.from(parsedPayload)
      return parsedPayload
    }
    default:
      return payload
  }
}

module.exports = parse
