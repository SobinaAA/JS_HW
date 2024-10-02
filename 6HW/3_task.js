"use strict";
let num = 1;
logSuperCool();
// Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

// Пример: const arr = [5,2,7,3,8,1,6] //4
const arrayTask3 = [5,2,7,3,8,1,6]
function findNum1(arr = []) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const number = sortedArr.find((element, index, array) => {return (array[index + 1] - element == 2)})
    return number + 1;
}
console.log(`Пропущенное число: ${findNum1(arrayTask3)}`);
logSuperCool();
function findNum2(arr = []) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const number = sortedArr.reduce((result, element, index, array) => {
        if (array[index + 1] - element === 2) {
            return result + element};  
        return result;
    },0)
    return number + 1;
}
console.log(`Пропущенное число: ${findNum2(arrayTask3)}`);
logSuperCool();
// Если есть два пропущенных числа. Не подряд, а в разных местах [2, 1, 1, 3, 7, 8, 6, 5, 8, 4, 10, 12, 13, 14] // [9, 11]
const arrayTask3_2 = [2, 1, 1, 3, 7, 8, 6, 5, 8, 4, 10, 12, 13, 14];
function findNum3(arr = []) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const uniqArr = [... new Set(sortedArr)];
    const numbers = uniqArr.filter((element, index, array) => {
        return ((element != array[index + 1] - 1) && (index != array.length - 1));
      });
    const result = numbers.length == 0? 'Простите, пропущенных нет': numbers.map(el => el + 1);
    return result;
}
console.log(`Пропущенные числа: ${findNum3(arrayTask3_2)}`);
//Функция для вывода красивого разделителя между задачами
function logSuperCool() {
    console.log(`\n=================${num}-й вариант =================\n`)
    num++;
}