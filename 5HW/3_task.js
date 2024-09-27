"use strict";
// Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
function coutNums(n = 9) {
    let result = 0;
    if (n < 10) {
        return n
    } else {
        let strN = n.toString().split('');
        console.log(strN);
        for (let num of strN) {
            result += Number(num);
        }
        return coutNums(result);    
    }
}
console.log(coutNums(555));
