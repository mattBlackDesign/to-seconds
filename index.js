'use strict';

const converters = {
	days: value => value * 86400,
	hours: value => value * 3600,
	minutes: value => value * 60,
	seconds: value => value
};

const toSeconds = object => Object.entries(object).reduce((seconds, [key, value]) => {
	if (typeof value !== 'number') {
		throw new TypeError(`Expected a \`number\` for key \`${key}\`, got \`${value}\` (${typeof value})`);
	}

	if (!converters[key]) {
		throw new Error('Unsupported time key');
	}

	return seconds + converters[key](value);
}, 0);

module.exports = toSeconds;
// TODO: remove this for next major version
module.exports.default = toSeconds;
