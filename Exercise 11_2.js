//Задание 2
function isPrime(num) {
  num = +prompt("Введите любое число от 0 до 1000");
  if (num > 1000 || num < 2 || !Number.isInteger(num)) return "данные неверны";
  let squareRoot = Math.sqrt(num);
  for (let b = 2; b <= squareRoot ; b++)
      if (num % b === 0) return "не простое число";
  return "простое число";
}
alert(isPrime());