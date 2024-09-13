//3 task*
//Работает в консоли браузера, так как запрашивается ввод числа от пользователя
"use strict";
let result_task = -1, n_ask;
while (result_task < 0) {
   alert('Начинаю работу, бррбрбр..')
    n_ask = +prompt('Введите число N для вывода по заданию! \n N - целое число от 0 до 9  \n N + NN + NNN');
    if (n_ask != NaN && n_ask < 10 && n_ask > 0 && Number.isInteger(n_ask)) {
        result_task = n_ask + Number("" + n_ask + n_ask) + Number("" + n_ask + n_ask + n_ask);
        alert('Получите ваше число: ' + result_task);
    } else {alert('Что-то пошло не так...')}
}


