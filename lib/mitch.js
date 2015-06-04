var quotes = require('./quotes');

var mitch = function(index) {
	if(index !== null && index !== undefined) {
		return mitch.get(index);
	}

	return mitch.random();
};

mitch.random = function() {
	return quotes[Math.floor(Math.random()*quotes.length)];
};

mitch.get = function(index) {
	if(0 <= index && index < quotes.length) {
		return quotes[index];
	}

	throw 'Sorry, Mitch Hedberg doesn\'t know that one';
};

mitch.async = function(index, done) {
	if(arguments.length === 1) {
		done = index;
		index = null;
	}

	process.nextTick(function() {
		done(null, mitch(index));
	});
};

module.exports = mitch;