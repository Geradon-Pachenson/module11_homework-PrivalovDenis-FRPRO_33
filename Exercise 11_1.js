// Задание 1
function getTypeNumber () {
    let arr = [null, '11', 3, false, 11, 5, 2, 4, 6, 7, 0,];
    let numberOdd = 0;
    let numberEven = 0;
    let zero = 0;
    arr.forEach((item) => {
    if (typeof item === 'number' && !isNaN(item)) {
        if (item === 0) {
        zero += 1
        } else if (item % 2 === 0) {
        numberEven += 1
        } else if (item % 2 === 1) {
        numberOdd += 1
        }  
    }
    });
    console.log (`Колличество четных чисел в массиве - ${numberEven}, нечетных чисел - ${numberOdd}, нулей - ${zero}`)};
    
    getTypeNumber ();