const numbers = [1, 3, 8, 2, 10, 2, 1, 4];

const newNumbers = numbers.map(function(item, index) {
  return item + index;
});

console.log(newNumbers);

const sum = numbers.reduce(function(total, next) {
  return total + next;
}, 0);

console.log(sum);