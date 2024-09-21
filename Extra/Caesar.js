// Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';


"use strict";
const str1 = 'ZzZ';
const offset1 = 1;

const str2 = 'AbC';
const offset2 = -1;

//Шифрование через свой алфавит, пишу алфавит
console.log('_____________Шифрование через свой алфавит_____________');
let engUpperAlphabet = '';
let engLowerAlphabet = '';
for (let i = 65; i < 91; i++) {
    engUpperAlphabet += String.fromCodePoint(i);
    }
for (let i = 97; i < 123; i++) {
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
        }
    }
    return `Результат шифрования:   ${secretWord}  \n`;
}

console.log(Caesar(str1, offset1));
console.log(Caesar(str2, offset2));
//Выполняю шифр с ASCII

console.log('_____________Шифрование через ASCII_____________');
const minUL = 65;
const maxUL = 90;
const minLL = 97;
const maxLL = 122;
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
        }
    }
    return `Результат шифрования:   ${secretWord}  \n`;
}

console.log(CaesarASCII(str1, offset1));
console.log(CaesarASCII(str2, offset2));
