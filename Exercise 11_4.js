//Задание 4
!function getList(a,b) {
  a = +prompt("Введите первое число");
  b = +prompt("Введите второе число");
  if (a > b) {
    alert('Второе число должо быть больше первого');
          };
  let intervalId = setInterval(function() {
    console.log(a++);
    if (a > b) clearInterval(intervalId);
  }, 1500);
}();