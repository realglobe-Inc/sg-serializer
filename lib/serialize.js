/**
 * Serialize an object
 * @function serialize
 * @param {Object} data - Data to serialize
 * @param {Object} [options={}] - Optional settings.
 * @returns {string} - Serialized string
 *
 */
'use strict'

const { dict, set } = require('json-pointer')
const Types = require('./types')

/** @lends serialize */
function serialize (data, options = {}) {
  let {
    indent = null,
    metaKey = '$$types',
    types = {}
  } = options

  types = Object.assign({}, Types, types)

  function convert (data) {
    if (Array.isArray(data)) {
      return data.map(convert)
    }
    data = Object.assign({}, data)
    let pointed = dict(data)
    data[ metaKey ] = Object.assign({}, data[ metaKey ])
    for (let pointer of Object.keys(pointed)) {
      let value = pointed[ pointer ]
      for (let typeName of Object.keys(types)) {
        let type = types[ typeName ]
        if (type.is(value)) {
          set(data, pointer, type.format(value))
          data[ metaKey ][ pointer ] = typeName
        }
      }
    }
    return data
  }

  return JSON.stringify(convert(data), null, indent)
}

module.exports = serialize
