//Задание 4
!function getList(a,b) {
    a = +prompt("Введите любое число");
    b = +prompt("Введите любое число");
    let intervalId = setInterval(function() {
      console.log(a++);
      if (a > b) clearInterval(intervalId);
    }, 1500);
  }();
  