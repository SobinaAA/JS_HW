// 1. Цикл for..of в массиве
//   - Создайте массив [1,2,3,4,5,6,7,8,9,10]
//   - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
//     если элемент четный - возведет его в квадрат
//     если элемент нечетный - возведет его в 3ю степень
'use strict';
console.log('\nПервое');
const task1Arr = [1,2,3,4,5,6,7,8,9,10];
const result = [];
for (let numArr of task1Arr) {
    if (numArr % 2 == 0) {
        result.push(numArr ** 2);
    } else {
        result.push(numArr ** 3);
    }
}
console.log(...result);
console.log('\nВторое');
// 2. Методы массивов
//   - Создайте массив [1,2,3,4,5]
//   - Добавьте в конец массива число 6 соответствующим методом
//   - Добавьте в начало массива число 0 соответствующим методом
//   - Удалите элемент с индексом 2 из массива соответствующим методом
//   - Удалите последний элемент из массива соответствующим методом
//   В результате вы должны получить [0, 1, 3, 4, 5]
const task2Arr = [1,2,3,4,5];
task2Arr.push(6);
task2Arr.unshift(0);
task2Arr.splice(2, 1);
task2Arr.pop();
console.log(task2Arr);
console.log('\nТретье');
// 3. Деструктуризация массивов
//   - Создайте массив из 5 любых чисел (придумать числа самим)
//   - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
//   - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
const task3Arr = [5,6,1,9,0];
const [first, second, ...rest] = task3Arr;
console.log(first, second, rest);
console.log('\nЧетвертое');
// 4. Конкатенация массивов
//   - Создайте массив с числами [1,2,3,4,5]
//   - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
//   - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
//   - Используйте спред оператор
const task4Arr1 = [1,2,3,4,5];
const task4Arr2 = [6, 7, 8, 9, 10];
const mergedArray = [...task4Arr1, ...task4Arr2];
console.log(mergedArray);