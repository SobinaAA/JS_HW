"use strict";
//Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//и выводить в консоль количество гласных и согласных букв в этом слове. 
//Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonantss
const theWord = 'ЕДинОобрАзноСТь'
let lowerWord = theWord.toLowerCase();
console.log(lowerWord);
const vowels = 'аиеёоуыэюя';
const consonants = 'бвгджзйклмнпрстфхцчшщ';
let i = 0;
let sumVow = 0;
let sumCon = 0;
while (i < lowerWord.length) {
    if (vowels.includes(lowerWord[i])) {
        sumVow++
    } else if (consonants.includes(lowerWord[i])) {
        sumCon++
    } 
    i++;
}
console.log(`${theWord} contains ${sumVow} vowels and ${sumCon} consonants`);