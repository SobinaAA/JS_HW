"use strict";
// Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно. 
//    Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
//    И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'. 
//    Задачу решить через замыкания
//     Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

//   Рекоммендации:
//    - Для генерации числа в границах воспользуйтесь методом:
//       function getRandomArbitrary(min, max) {
//         return Math.random() * (max - min) + min;
//       }
function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }

const createRandom = (n) => {
    let countMin = -1;
    let countMax = 0;
    return () => {
        if (countMax == n) {
            return 'All numbers were received';
        } else {
            countMin++;
            countMax++;
            return getRandomArbitrary(countMin, countMax);
        }
  };
}
const  getNewRandom = createRandom(5);
console.log(getNewRandom());
console.log(getNewRandom());
console.log(getNewRandom());
console.log(getNewRandom());
console.log(getNewRandom());
console.log(getNewRandom());
console.log(getNewRandom());
console.log('_______________________________________ANOTHER WAY__________________________________________');
const createRandom2 = (n) => {
    const wereUsed = [];
const allNum = Array.from({ length: n }, (_, i) => i + 1);
    return () => {
        if (wereUsed.length >= allNum.length) {
            return 'All numbers were received';
        } else {
           let newNum = Math.round(getRandomArbitrary(1, n));
           while (wereUsed.includes(newNum)) {
                newNum = Math.round(getRandomArbitrary(1, n));
           };
           wereUsed.push(newNum);
           return newNum
        }
    }
  }
const  getNewRandom2 = createRandom2(5);
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log(getNewRandom2());
console.log('_______________________________________ANOTHER WAY__________________________________________');
const createRandom3 = (n) => {
    const allNum = Array.from({ length: n }, (_, i) => i + 1);
    return () => {
        if (!allNum.length) {
            return 'All numbers were received';
        } else {
           let newNum = Math.round(getRandomArbitrary(1, n));
           while (!allNum.includes(newNum)) {
                newNum = Math.round(getRandomArbitrary(1, n));
           };
           allNum.splice(allNum.indexOf(newNum), 1);
           return newNum
        }
    }
  }
const  getNewRandom3 = createRandom3(5);
console.log(getNewRandom3());
console.log(getNewRandom3());
console.log(getNewRandom3());
console.log(getNewRandom3());
console.log(getNewRandom3());
console.log(getNewRandom3());
console.log(getNewRandom3());
console.log(getNewRandom3());