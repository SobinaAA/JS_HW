"use strict";
const minAge = 18;
const maxAge = 60;
let age;
age = [10, 17, 18, 19, 59, 60, 61, 'abrakadAbra', '0', '90', '---']; //Массив входных данных

for (let i = 0; i < age.length; i++) {
    if (isNaN(age[i])) {
        console.log('Incorrect data type');
    } else if (age[i] < minAge) {
        console.log("You don't have access cause your age is " + age[i] + " It's less then " + minAge);
    } else if (age[i] >= minAge && age[i] < maxAge) {
        console.log("Welcome!");
    } else if (age[i] >= maxAge) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    };
}