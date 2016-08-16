'use strict'

const { serialize, deserialize } = require('sg-serializer')

// Define type converters
let types = {
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
}

{
  let src = {
    foo: new Date()
  }

  let serialized = serialize(src, { types })
  console.log(serialized) // -> stringify data with type meta data

  let deserialize = deserialize(serialized, { types })
  console.log(deserialize) // -> Restored data
}
