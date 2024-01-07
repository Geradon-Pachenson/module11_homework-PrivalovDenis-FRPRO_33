//Задание 3
function sum(numOne) {
  numOne = +prompt("Введите любое число");
  return function(numTwo) {
      numTwo = +prompt("Введите любое число");
      return numOne + numTwo;
  };
}
let result = sum();
console.log(result());