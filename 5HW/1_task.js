// 1. Бесконечные аргументы
//   - Напишите функцию, принимающую на вход любое количество массивов
//   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
//   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
//   - Решить с использованием Spread operator
"use strict";
let num = 1;
function logSuperCool() {
    console.log(`\n=================${num}-е задание =================\n`)
    num++;
}
logSuperCool();
function mergeArrays(...arrayOfArrays) {
  let finalArray = [];
  finalArray = finalArray.concat(...arrayOfArrays);
  return finalArray;
}
console.log(mergeArrays([1,2], [3,4], [5,6]));
// 2. Devide by _
//   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
//   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
//   - Пример: I am super engineer => i_Am_Super_Engineer
logSuperCool();
function convertText(sentence) {
  let arraySentence = sentence.split(' ');
  let newSentence = "";
  
  for (let i = 0; i < arraySentence.length; i++) {
    if (!i) {
        newSentence += arraySentence[i].toLowerCase();
    } else {
        newSentence +=  "_" + arraySentence[i][0].toUpperCase() + arraySentence[i].slice(1).toLowerCase();
    }
  }
  return newSentence;
}
console.log(convertText('I am super engineer'));
// 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
//   - Например fibanacci(8) //21
logSuperCool();
function fibanacci(n) {
    if (n == 0 || n == 1) {
        return n
    } else {
        return fibanacci(n-2) + fibanacci(n-1);
    }
}
console.log(fibanacci(8));