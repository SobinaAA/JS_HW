// 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
'use strict';

const competitorPizzas = ['PeperOni', 'CapriChosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['PepEroni', 'Turkish', 'CaprichOsa', 'Diablo', '4 cheesEs', 'hawai', 'Extra-hot'];
const superPizza = [];
for (let i = 0; i < competitorPizzas.length; i++) {
    competitorPizzas[i] = competitorPizzas[i].toLowerCase();
}
for (let pizza of myPizzas) {
    if (!competitorPizzas.includes(pizza.toLowerCase())) {
        superPizza.push(pizza);
    }
}
console.log(superPizza.length == 0? null : superPizza);

