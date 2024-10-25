"use strict";
// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds (f) {
    setTimeout(f, 2000);
}
const func1 = () => console.log('Hello, World!!');
const func2 = () => console.log('Hello, Anatoly!');
delayTwoSeconds(func1);
delayTwoSeconds(func2);
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const p1 = new Promise((resolve, reject) => {
  resolve(1);
});
p1.then((result) => console.log(result));
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const p2 = new Promise((resolve, reject) => {
    reject('Promise failed');
  });
  p2.catch((result) => console.log(result));
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(num) {
    return new Promise((resolve, reject) => {
        resolve(num);
      });
}
promiseNumber(12345).then((resolvedResult) => console.log(resolvedResult));
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
const nums = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];
Promise.all(nums).then((results) => console.log(`result1 = ${results[0]}, result2 = ${results[1]}, result3 = ${results[2]}`))
// // 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
// //   в консоль статус и результат каждого промиса через .then
Promise.allSettled(nums).then((results) => {
  for (const result of results) {
    console.log(result);
  }
});
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function asyncFunctionAll(numsFunc) {
  try {
    const result = await Promise.all(numsFunc).then((results) => results);
    console.log(result);   
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finished function");
  }
}
asyncFunctionAll(nums);
async function asyncFunctionAllSettled(numsFunc) {
    try {
      const result = await Promise.allSettled(numsFunc).then((results) => results);
      console.log(result);   
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finished function");
    }
  }

asyncFunctionAllSettled(nums);