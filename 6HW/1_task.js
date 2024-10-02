"use strict";
let num = 1;
logSuperCool();
// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
const arrayForTask1 = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
arrayForTask1.forEach((element) => {
    if (element % 3 == 0) console.log(`Элемент: ${element} делится на три`)
})
logSuperCool();
//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
const newArray = arrayForTask1.map((element, index, array) => element - array.length);
console.log(newArray)
logSuperCool();
//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]
const result = arrayForTask1.filter((element, index, array) => {
    let arrElem = array[0];
    if (index > 0) {
        return element > array[index - 1];
        arrElem = array[index];
    }
  });
console.log(result);  
logSuperCool();
//   4. find - найдите элемент, равный своему индексу //2
const found = arrayForTask1.find((element, index) => {
    return element == index;
  });
console.log(found);
//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
const sortedStringsAsc = [...arrayForTask1].sort((a, b) => a - b);
console.log(sortedStringsAsc);
logSuperCool();
//   6. reduce - получите сумму всех чисел массива //466
const sum = arrayForTask1.reduce((result, element) => result += element, 0);
console.log(sum);
logSuperCool();
//   7. some - проверьте, есть ли в массиве элементы больше 90 //true
console.log(arrayForTask1.some((element) => element > 90));
logSuperCool();
//   8. every - проверьте, что все элементы массива двухзначные //false
console.log(arrayForTask1.every((element) => (element >= 10) && (element < 90)));
logSuperCool();
//Функция для вывода красивого разделителя между задачами
function logSuperCool() {
    console.log(`\n=================${num}-е задание =================\n`)
    num++;
}