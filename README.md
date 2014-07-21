# mix2 [![NPM version](https://badge.fury.io/js/mix2.svg)](http://badge.fury.io/js/mix2) [![Build Status](https://travis-ci.org/kaelzhang/node-mix2.svg?branch=master)](https://travis-ci.org/kaelzhang/node-mix2) [![Dependency Status](https://gemnasium.com/kaelzhang/node-mix2.svg)](https://gemnasium.com/kaelzhang/node-mix2)

The port of YUI mix method for node.

## Install

```bash
$ npm install mix2 --save
```

## Usage

```js
var mix = require('mix2');
var a = {a: 1};
var b = {b: 2};
var c = {a: 10, b: 20, c: 30}
mix(a, b);
a; // {a: 1, b: 2}

mix({a: 1}, c, false);            // {a: 1,  b: 20, c: 30}
mix({a: 1}, c, true, ['a', 'c']); // {a: 10, c: 30}
```

### mix(receiver, supplier, override, copylist)

- receiver `Object`
- supplier `Object`
- override `Boolean=true` Whether should override the existing property of `receiver`. Default to overriding
- copylist `(Array.<String>)=` If specified, only mix the specific keys in the array.

Extend the object `receiver` with `supplier`, and returns `receiver`.

## License

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->