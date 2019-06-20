declare namespace toSeconds {
	interface TimeDescriptor {
		readonly days?: number;
		readonly hours?: number;
		readonly minutes?: number;
		readonly seconds?: number;
	}
}

declare const toSeconds: {
	/**
	Convert an object of time properties to seconds: `{seconds: 2}` → `120`.

	@example
	```
	import toSeconds = require('@mblackmblack/to-seconds');

	toSeconds({
		days: 15,
		hours: 11,
		minutes: 23,
		seconds: 1
	});
	//=> 1336981
	```
	*/
	(timeDescriptor: toSeconds.TimeDescriptor): number;

	// TODO: remove this for next major version
	default: typeof toSeconds;
};

export = toSeconds;
