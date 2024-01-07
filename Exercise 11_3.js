//Задание 3
const getSum = () => { 
  numOne = +prompt("Введите любое число");
  return function() {
      numTwo = +prompt("Введите любое число");
      return numOne + numTwo;
  };
}
let result = getSum();
console.log(result());