"use strict";
// Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

// Пример: const arr = [5,2,7,3,8,1,6] //4
const arrayTask3 = [5,2,7,3,8,1,6]
function findNum(arr = []) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const number = sortedArr.find((element, index, array) => {return (array[index + 1] - element == 2)})
    return number + 1;
}

function findNum(arr = []) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const number = sortedArr.reduce((result, element, index, array) => {
        if (array[index + 1] - element === 2) {
            return result + element};  
        return result;
    },0)
    return number + 1;
}

console.log(`Пропущенное число: ${findNum(arrayTask3)}`);