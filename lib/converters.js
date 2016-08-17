/**
 * Supported types
 * @namespace Types
 */
'use strict'

module.exports = Object.assign(exports, {
  'builtin:date': {
    is: (value) => value instanceof Date,
    format: (value) => value,
    parse: (value) => new Date(value)
  },
  'builtin:error': {
    is: (value) => value instanceof Error,
    format: ({ name, message, stack }) => ({ name, message, stack }),
    parse: ({ name, message, stack }) => Object.assign(new Error(message), { name, message, stack })
  }
})
