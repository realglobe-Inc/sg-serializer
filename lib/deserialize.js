/**
 * Deserialize serialized data
 * @function deserialize
 * @param {string} serialized - Serialized string
 * @param {Object} [options={}] - Optional settings
 * @returns {Object} - Deserialize data
 */
'use strict'

const Types = require('./types')
const { get, set } = require('json-pointer')

/** @lends deserialize */
function deserialize (serialized, options = {}) {
  let {
    metaKey = '$$types',
    types = {}
  } = options
  types = Object.assign({}, Types, types)

  let data = JSON.parse(serialized)

  function convert (data) {
    if (Array.isArray(data)) {
      return data.map(convert)
    }
    data = Object.assign({}, data)
    let meta = data[ metaKey ]
    for (let pointer of Object.keys(meta || {})) {
      let typeName = meta[ pointer ]
      let type = types[ typeName ]
      if (!type) {
        throw new Error(`[sg-serializer] Unknown type: ${typeName} `)
      }
      let value = get(data, pointer)
      set(data, pointer, type.parse(value))
    }
    delete data[ metaKey ]
    return data
  }

  return convert(data)
}

module.exports = deserialize
