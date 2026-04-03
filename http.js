// http.js
//import Database from "bun:sqlite"; //本当は使いたかったが適当なsqliteデータがないので断ね
//import pl from "nodejs-polars";
const pl = require("nodejs-polars");
const fooSeries = pl.Series("foo", [1, 2, 3]);
console.log(fooSeries);
const dispval = JSON.stringify(fooSeries.toArray());

const df = pl.DataFrame({
  A: [1, 2, 3, 4, 5],
  fruits: ["banana", "banana", "apple", "apple", "banana"],
  B: [5, 4, 3, 2, 1],
  cars: ["beetle", "audi", "beetle", "beetle", "beetle"],
});

console.log(df);

export default {
  port: 3000,
  fetch(request) {
    return new Response(dispval);
  },
};

