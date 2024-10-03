//написать рекурсивный flat для массива любого уровня вложенности
"use strict";
function recursive(arr) {
    if (arr.every((element) => !Array.isArray(element))) {
        return arr;
    } else {
        const flatArr = arr.flat();
        return recursive(flatArr)
        }
    }
const arrayForTask = [1, [2], [3, [4, 5, [6]]]];
console.log(recursive(arrayForTask));