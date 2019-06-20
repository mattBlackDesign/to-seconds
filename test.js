import test from 'ava';
import toSeconds from '.';

test('convert an object to seconds', t => {
	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 1
		}),
		1
	);

	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 55
		}),
		55
	);

	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 0,
			minutes: 1,
			seconds: 7
		}),
		67
	);

	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 0,
			minutes: 5,
			seconds: 0
		}),
		60 * 5
	);

	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 1,
			minutes: 7,
			seconds: 0
		}),
		60 * 67
	);

	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 12,
			minutes: 0,
			seconds: 0
		}),
		60 * 60 * 12
	);

	t.deepEqual(
		toSeconds({
			days: 1,
			hours: 16,
			minutes: 0,
			seconds: 0
		}),
		60 * 60 * 40
	);

	t.deepEqual(
		toSeconds({
			days: 41,
			hours: 15,
			minutes: 0,
			seconds: 0
		}),
		60 * 60 * 999
	);
});

test('can leave out properties', t => {
	t.deepEqual(
		toSeconds({
			seconds: 1
		}),
		1
	);
});

test('handle negative values', t => {
	t.deepEqual(
		toSeconds({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: -10
		}),
		-10
	);
});

test('throws on unsupported key', t => {
	t.throws(() => {
		toSeconds({
			foo: 1
		});
	}, /Unsupported time key/);
});

test('throws on non-number value', t => {
	t.throws(() => {
		toSeconds({
			seconds: true
		});
	}, /Expected a `number` for key `seconds`/);
});
