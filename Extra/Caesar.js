// Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';


"use strict";
//Параметры алафавита (границы заглавных и строчных букв в таблице ASCII)
const minUL = 65;
const maxUL = 90;
const minLL = 97;
const maxLL = 122;

//Шифруемые строки и шаг шифрования
const str1 = 'ZzZ AbC - BaC zZz!';
const offset1 = 1;
const str2 = 'ZzZ AbC - BaC zZz!';
const offset2 = -1;

//Шифрование через свой алфавит
//Пишу алфавит
console.log('_____________Шифрование через свой алфавит_____________');
let engUpperAlphabet = '';
let engLowerAlphabet = '';
for (let i = minUL; i <= maxUL; i++) {
    engUpperAlphabet += String.fromCodePoint(i);
    }
for (let i = minLL; i <= maxLL; i++) {
    engLowerAlphabet += String.fromCodePoint(i);
    }
function Caesar(secret, move) {
    console.log(`Вы хотите зашифровать: ${secret}, со сдвигом ${move > 0 ? 'вправо' : 'влево'}`)
    let secretWord = '';
    for (let i = 0; i < secret.length; i++) {
        if (engUpperAlphabet.includes(secret[i])) {
            secretWord += engUpperAlphabet.at((engUpperAlphabet.indexOf(secret[i]) + move) % engUpperAlphabet.length);
        } else if (engLowerAlphabet.includes(secret[i])) {
            secretWord += engLowerAlphabet.at((engLowerAlphabet.indexOf(secret[i]) + move) % engLowerAlphabet.length);
        } else {
            secretWord += secret[i];
        }
    }
    return `Результат шифрования:   ${secretWord}  \n`;
}

console.log(Caesar(str1, offset1));
console.log(Caesar(str2, offset2));
//Выполняю шифр с ASCII

console.log('_____________Шифрование через ASCII_____________');

function CaesarASCII(secret, move) {
    console.log(`Вы хотите зашифровать: ${secret}, со сдвигом ${move}`)
    let secretWord = '';
    for (let i = 0; i < secret.length; i++) {
        if (secret.codePointAt(i) >= minUL && secret.codePointAt(i) <= maxUL) {
            if ((secret.codePointAt(i) + move) > maxUL) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move - 1) % maxUL + minUL);
            } else if ((secret.codePointAt(i) + move) < minUL) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move) - minUL + maxUL + 1);
            } else {
            secretWord += String.fromCodePoint((secret.codePointAt(i) + move));
            }
        } else if (secret.codePointAt(i) >= minLL && secret.codePointAt(i) <= maxLL) {
            if ((secret.codePointAt(i) + move) > maxLL) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move - 1) % maxLL + minLL);
            } else if ((secret.codePointAt(i) + move) < minLL) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move) - minLL + maxLL + 1);
            } else {
            secretWord += String.fromCodePoint((secret.codePointAt(i) + move));
            }
        } else {
            secretWord += secret[i];
        }
    }
    return `Результат шифрования:   ${secretWord}  \n`;
}

console.log(CaesarASCII(str1, offset1));
console.log(CaesarASCII(str2, offset2));
