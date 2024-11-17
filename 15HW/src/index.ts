import { PIZZA_NAMES } from "./data/receipts";
import { DOUGH_TYPE, PIZZA_SIZE } from "./data/types";
import { Pizza } from "./meal/pizza";
import { Pizzeria } from "./pizzeria/pizzeria";

const pizzeria = new Pizzeria("Pizzeria Don Olivka");

const order1 = pizzeria.createOrder();
order1.addPizza(PIZZA_NAMES.THREECHEESES, DOUGH_TYPE.THICK, PIZZA_SIZE.LARGE);
order1.addPizza(PIZZA_NAMES.GAWAII, DOUGH_TYPE.THIN, PIZZA_SIZE.SMALL, ["bacon", "sausage"]);
console.log('Блюда первого заказа: ', order1.getMeals());
console.log('Цена первого заказа: ', order1.getFullPrice());
const pizzaForPizzaSet1 = new Pizza(PIZZA_NAMES.CLOSEDCHICKEN, DOUGH_TYPE.THIN, PIZZA_SIZE.MEDIUM, ['tomatoes', 'olives', 'cheese']);
const pizzaForPizzaSet2 = new Pizza(PIZZA_NAMES.PEPPERONI, DOUGH_TYPE.THICK, PIZZA_SIZE.LARGE, ['oil', 'olives', 'mushrooms']);
const order2 = pizzeria.createOrder([pizzaForPizzaSet1, pizzaForPizzaSet2]);
order2.removeFromOrder('Пепперони');
console.log('Блюда второго заказа: ', order2.getMeals());
console.log('Цена второго заказа: ', order2.getFullPrice());
pizzeria.removeOrder(2);
console.log('Второй заказ (д.б. null): ', pizzeria.getOrder(2));