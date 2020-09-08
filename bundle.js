"use strict";

var numbers = [1, 3, 8, 2, 10, 2, 1, 4];
var newNumbers = numbers.map(function (item, index) {
  return item + index;
});
console.log(newNumbers);
var sum = numbers.reduce(function (total, next) {
  return total + next;
}, 0);
console.log(sum);
var filter = numbers.filter(function (item) {
  return item % 2 === 1;
});
console.log(filter);
var find = numbers.find(function (item, index) {
  console.log(index);
  return item === 1;
});
console.log(find);
