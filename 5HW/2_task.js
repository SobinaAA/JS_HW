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
    let result = true;
    for (let i = 0; i <= smallWord.length /2; i++) {
         if (smallWord[i] == smallWord[smallWord.length - i - 1]) {
                result = true;
        } else {
            result = false;
            break;
        }
    } 
    return result;
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
        max = word.length;
    }
  }
  for (let word of arraySentence) {
    if (word.length == max) {
        coolWords.push(word);
    }
  }
  return coolWords;
}
console.log(countChar('Моя фраза состоит из пары слов и может быть это сложно но это не всерьез'));