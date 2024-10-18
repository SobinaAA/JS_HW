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
    console.log(`Вы хотите зашифровать: ${secret}, со сдвигом ${move}`)
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
        if (secret.codePointAt(i) >= 65 && secret.codePointAt(i) <=90) {
            if (secret.codePointAt(i) + move < 65) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move + 26));
            } else if (secret.codePointAt(i) + move > 90) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move - 26));
            } else {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move));
            }
        } else if (secret.codePointAt(i) >= 97 && secret.codePointAt(i) <=122) {
            if (secret.codePointAt(i) + move < 97) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move + 26));
            } else if (secret.codePointAt(i) + move > 122) {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move - 26));
            } else {
                secretWord += String.fromCodePoint((secret.codePointAt(i) + move));
            }
    } else secretWord += secret[i];
    }
    return secretWord;
}

console.log(Caesar(str1, offset1));
console.log(CaesarASCII(str2, offset2));
