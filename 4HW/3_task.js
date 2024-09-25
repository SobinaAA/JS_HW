// Удалить дубликаты
//   - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
//   - Напишите скрипт, который убирает из массива дубликаты
//   - При удалении дубликата, длина массива должна уменьшаться
'use strict';
console.log('\nПервое решение');
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
console.log(`Длина моего массива до преобразования - ${myArray.length}, вот он: ${myArray}`);
for (let numArr of myArray) {
    if (myArray.indexOf(numArr) != myArray.lastIndexOf(numArr)) {
        myArray.splice(myArray.lastIndexOf(numArr), 1);
    }
}
console.log(`Длина моего массива после преобразования - ${myArray.length}, вот он: ${myArray}`);

console.log('\nВторое решение');
let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 3, 
    10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 9, 9, 4, 5, 4, 4, 4, 6];
console.log(`Длина моего массива до преобразования - ${myArray2.length}, вот он: ${myArray2}`);
for (let i = 0; i < myArray2.length; i++) {
    while (myArray2.includes(myArray2[i]) && myArray2.lastIndexOf(myArray2[i]) !== i){
        myArray2.splice(i, 1);
    }
}
console.log(`Длина моего массива после преобразования - ${myArray2.length}, вот он: ${myArray2}`);