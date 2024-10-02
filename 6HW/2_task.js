"use strict";
//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
const words = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue"       
  ];

function countVowels(str = '') {
    const vowels = 'aeiouy';
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) sum++;
    }
    return sum;
}
function sortWords(arr = []) {
    return arr.toSorted((a, b) => countVowels(a) - countVowels(b));
}
console.log(sortWords(words));
  