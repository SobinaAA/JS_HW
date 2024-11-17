import { ERROR_MESSAGES } from "../data/messages";
import { PIZZA_NAMES, toppingsType } from "../data/receipts";
import { DOUGH_TYPE, IMeal, PIZZA_SIZE } from "../data/types";
import { Pizza } from "../meal/pizza";

export class Order {
  private orderMeals: IMeal[] = [];
  constructor(public numOrder: number, meals?: IMeal[]) {
    if (meals) this.orderMeals = [...meals];
  }
  
  addPizza(namePizza: PIZZA_NAMES, dough: DOUGH_TYPE, size: PIZZA_SIZE, extra?: toppingsType[]): Order {
    const orderPizza = new Pizza(namePizza, dough, size);
    if (extra) {
      orderPizza.extraToppings = [...extra];
    };
    this.orderMeals.push(orderPizza);
   return this
  }

  getMeals(): IMeal[] {
    return this.orderMeals;
  }

  getFullPrice(): number {
    return this.orderMeals.reduce((sum: number, meal: IMeal) => sum + meal.getPrice(), 0)
  }

  removeFromOrder(nameToDelete: string) {
    const index: number = this.orderMeals.findIndex(meal => meal.name === nameToDelete);
    if (index === -1) throw new Error(ERROR_MESSAGES.NO_NAME);
    this.orderMeals.splice(index, 1);    
  }
}