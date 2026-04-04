 // esm
import pl from 'nodejs-polars';

// require
// const pl = require('nodejs-polars'); 

 const fooSeries = pl.Series("foo", [1, 2, 3])


console.log(fooSeries);
console.log('first');