"use strict";

var numbers = [1, 3, 8, 2, 10, 2, 1, 4];
var newNumbers = numbers.map(function (item) {
  return item * 2;
});
console.log(newNumbers);

var teste = function teste() {
  return {
    nome: "Arthur"
  };
};

console.log(teste());
