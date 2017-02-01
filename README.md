sg-serializer
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-serializer
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-serializer
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-serializer.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-serializer
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-serializer.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/sg-serializer/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-serializer
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-serializer.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-serializer.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-serializer
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-serializer.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-serializer
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-serializer.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Serializer for SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-serializer --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/sg-serializer/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [SUGOS][sugos_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[sugos_url]: https://github.com/realglobe-Inc/sugos
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
