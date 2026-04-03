const pl = require("nodejs-polars");

const df = pl.DataFrame({
  "A": [1, 2, 3, 4, 5],
  "B": ["a", "b", "c", "d", "e"]
});

const result = df
  .filter(pl.col("A").gt(2))
  .select(pl.col("B"));

console.log(result);
console.log('apple branch');