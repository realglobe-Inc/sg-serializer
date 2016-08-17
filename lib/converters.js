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
  },
  'builtin:regexp': {
    is: (value) => value instanceof RegExp,
    format: (value) => String(value),
    parse: (value) => eval(value.replace(/\//g, '/'))
  },
  'buildin:nan': {
    is: (value) => (typeof value === 'number') && Number.isNaN(value),
    format: () => null,
    parse: () => NaN
  },
  'buildin:symbol': {
    is: (value) => (typeof value === 'symbol'),
    format: (value) => String(value),
    parse: (value) => (typeof Symbol !== 'undefined') && Symbol.for(String(value).replace(/^Symbol\(|\)$/g, ''))
  }
})
