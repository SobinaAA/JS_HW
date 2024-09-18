"use strict";
const minAge = 18;
const maxAge = 60;
let age_ask = prompt('Введите свой возраст! \n Надоест, введите здесь же "end"');
while (age_ask != 'end') {
    if (isNaN(age_ask)) {
        alert('Incorrect data type');
    } else if (age_ask < minAge) {
        alert("You don't have access cause your age is " + age_ask + " It's less then " + minAge);
    } else if (age_ask >= minAge && age_ask < maxAge) {
        alert("Welcome!");
    } else if (age_ask >= maxAge) {
        alert("Keep calm and look Culture channel");
    } else {
        alert("Technical work");
    }
    age_ask = prompt('Введите свой возраст! \n Надоест, введите "end"');
}