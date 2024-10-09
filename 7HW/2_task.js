"use strict";
let num = 1;
logSuperCool();
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];
// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
function addCharacter(character = {}) {
    if ('name' in character && 'age' in character) {
        if (typeof character['name'] === 'string' && typeof character['age'] === 'number') {
        characters.push(character);
        } else console.log('Поля не того формата');
    } else console.log('Отсутствуют нужные поля');
}
addCharacter({'name': 'Alena', 'age': 32});
console.log(characters);
logSuperCool();
// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(nameChar = ''){
    if (characters.map(element => Object.values(element)).flat().includes(nameChar))
    return characters.find(character => character.name === nameChar);
}
console.log(getCharacter('Fred'));
logSuperCool();
// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
    return characters.filter(character => character.age >= minAge);
}
console.log(getCharactersByAge(40));
logSuperCool();
// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
    const charToChange = characters.find(character => character.name === name);
    if (charToChange !== undefined) {
    charToChange.name = newCharacter.name;
    charToChange.age = newCharacter.age;
    } else console.log('Нет такого персонажа!')
}
updateCharacter('Alena', {name: 'Ololena', age: 100});
console.log(characters);
logSuperCool();
// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
    if (characters.map(element => Object.values(element)).flat().includes(name)) characters.splice(characters.findIndex(character => character.name === name),1);
}
removeCharacter('Ololena');
console.log(characters);
//Функция для вывода красивого разделителя между задачами
function logSuperCool() {
    console.log(`\n=================${num}-е задание =================\n`)
    num++;
}