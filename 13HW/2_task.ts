// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type MapCallback<T> = (value: T, index: number, array: T[]) => T;

function myMap<T>(array: T[], callback: MapCallback<T>): T[] {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i], i, array));
  }
  return resultArray;
}

console.log(myMap([1,2,3,4,5], (element, i) => element * i));