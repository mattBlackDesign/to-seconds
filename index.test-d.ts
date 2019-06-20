import {expectType} from 'tsd';
import toSeconds = require('.');

expectType<number>(toSeconds({days: 15}));
expectType<number>(toSeconds({hours: 11}));
expectType<number>(toSeconds({minutes: 23}));
expectType<number>(toSeconds({seconds: 1}));
