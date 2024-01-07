//Задание 5
const getList = (a,b) => {
  a = +prompt("Введите любое число");
  b = +prompt("Введите любое число");
  const result = Math.pow(a, b);
  return result;
  };
console.log(getList());