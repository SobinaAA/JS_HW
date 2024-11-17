import { TOPPINGS } from "../data/prices";
import { PIZZA_NAMES, pizzaReceipts, toppingsType} from "../data/receipts";
import { DOUGH_TYPE, PIZZA_SIZE } from "../data/types";
import { Meal } from "./meal";

export class Pizza extends Meal{
  public fullPrice: number;
  constructor(public name: PIZZA_NAMES, public dough: DOUGH_TYPE, public size: PIZZA_SIZE, public extraToppings?: toppingsType[]) {
    super(name);
    this.fullPrice = this.calculatePrice();
  }

  calculatePrice(): number{
    let sum = pizzaReceipts[this.name]['prices'][this.size] + pizzaReceipts[this.name]['toppings'].reduce((sum: number, top: toppingsType) => sum + TOPPINGS[top], 0);
    if (this.extraToppings) this.extraToppings.forEach((topping: toppingsType) => sum += TOPPINGS[topping]);
    return sum;
  }

}