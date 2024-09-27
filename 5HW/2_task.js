"use strict";
let num = 1;
function logSuperCool() {
    console.log(`\n=================${num}-е задание =================\n`)
    num++;
}
// 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
logSuperCool();
function palindrom(word) {
    let smallWord = word.toLowerCase();
    for (let i = 0; i <= smallWord.length /2; i++) {
         if (smallWord[i] !== smallWord[smallWord.length - i - 1]) {
          return false;
        }
    } 
    return true;
}
console.log('Четное количество символов, палиндром - ' + palindrom('ababCsScBaba'));
console.log('Нечетное количество символов, палиндром - ' + palindrom('KLOPoLK'));
console.log('Четное количество символов, не палиндром - ' + palindrom('ababdsScBaba'));
// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
//     и возвращает слово с наибольшим количеством букв. 
//     Если таких слов несколько - возвращает их все.
logSuperCool();
function countChar(sentence) {
  const arraySentence = sentence.split(' ');
  let coolWords = [];
  let max = 0;
  for (let word of arraySentence) {
      if (word.length > max) {
          coolWords.length = 0;
          max = word.length;
          coolWords.push(word);
      } else if (word.length == max) {
        coolWords.push(word);
      } 
  }
  return coolWords;
}
console.log(countChar('Моя полосищ фраза состоит из пары слов и может быть это сложно но это не всерьез словеса'));