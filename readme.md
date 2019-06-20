# to-seconds [![Build Status](https://travis-ci.org/mattblackdesign/to-seconds.svg?branch=master)](https://travis-ci.org/mattblackdesign/to-seconds)

> Convert an object of time properties to seconds: `{seconds: 2}` → `120`


## Install

```
$ npm install @mattblackdesign/to-seconds
```


## Usage

```js
const toMilliseconds = require('@mattblackdesign/to-seconds');

toMilliseconds({
	days: 15,
	hours: 11,
	minutes: 23,
	seconds: 1
});
//=> 1336981
```


## API

### toSeconds(input)

#### input

Type: `Object`

Specify an object with any of the following properties:

- `days`
- `hours`
- `minutes`
- `seconds`


## Related

- [to-milliseconds](https://github.com/sindresorhus/to-milliseconds) - The inverse of this module
- [parse-ms](https://github.com/sindresorhus/parse-ms) - The inverse of this module
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convert milliseconds to a human readable string

## Credits

This project is forked from https://github.com/sindresorhus/to-milliseconds. Special thanks to [sindresorhus](https://github.com/sindresorhus)

## License

MIT © [Matthew Black](https://matthewblack.me)
