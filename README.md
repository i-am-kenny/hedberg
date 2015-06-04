# hedberg.js
A simple library to bring Mitch Hedberg jokes to your JavaScript projects.

## usage

### require
```javascript
var mitch = require('hedberg');
```

### use
```javascript
var quote = mitch(0);

var random = mitch();
```

### async? no problem!
```javascript
mitch(function(err, quote) {
  console.log(quote);
});

mitch(100, function(err, quote) {
  console.log(quote);
});
```

## coming soon
- automated build
- browser support
- unit tests
- more examples
- expanded api

## credit
Thank you Buzzfeed for enumerating/ranking all of Mitch Hedberg's jokes.
