"use strict";
// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
const urlMy = `https://jsonplaceholder.typicode.com/todos`;
const bodyMy = {
    userId: 1,
    title: 'ABC',
    completed: false,
};

async function createTodo(url, body) {
    try {
        const response = await fetch(url, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        // if (response.status !== 200) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        for (let key in body) {
            console.log(body[key], ' == ',  data[key]);
            if (body[key] !== data[key]) throw new Error(`Incorrect response!`)
        }
        return data;
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Function is finished!");
    }
}
createTodo(urlMy, bodyMy)
.then(result => console.log(result));