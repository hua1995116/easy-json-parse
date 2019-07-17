# easy-json-parse

<p align="center">
    <a href="https://travis-ci.org/hua1995116/easy-json-parse"><img src="https://travis-ci.org/hua1995116/easy-json-parse.svg?branch=master" /></a>
    <a href="https://codecov.io/gh/hua1995116/easy-json-parse"><img src="https://codecov.io/gh/hua1995116/easy-json-parse/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/easy-json-parse?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/easy-json-parse.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/easy-json-parse" rel="nofollow"><img src="https://img.shields.io/npm/v/easy-json-parse.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/easy-json-parse" rel="nofollow"><img src="https://img.shields.io/npm/l/easy-json-parse.svg?style=flat" style="max-width:100%;"></a>
</p>

Are you still worried about the long code with `try {} catch {}`? like this:

```javascript
const jsonString = 'easy';
let json;

try {
  json = JSON.parse(jsonString);
} catch (e) {
  json = {};
}

console.log(json.xxx);
```
or
```javascript
const jsonString = null;
let json;

try {
  json = JSON.parse(jsonString) || {};
} catch (e) {
  json = {};
}

console.log(json.xxx);
```

Now, no matter whether it is long code or initialization, you don't need to worry.

use `easy-json-parse` will more easy and safe for `try{} catch{}`.

## Get started

case: initialValue

```javascript
import easyParse from 'easy-json-parse';
const jsonString = 'easy';
const [error, json] = easyParse(jsonString, {initialValue: {}});

console.log(json.xxx); // If json is not exist, will return {} safely.
```

case: normal

```javascript
import easyParse from 'easy-json-parse';
const jsonString = '{"easy": "easy"}';
const [error, json] = easyParse(jsonString);

console.log(json.easy); // easy
```


## Syntax

### Parameters

**text**

the string to parse as JSON

**options**

`options.reviver(optional)`

- if a function, prescribes how the value originally produced by parsing is transformed, before being returned, more info about this param in [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter)

`options.initialValue(optional)`
- init value for json.

### Returns

Array [error, value]

# License

MIT

Copyright (c) 2019 蓝色的秋风