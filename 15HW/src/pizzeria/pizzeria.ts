import { ERROR_MESSAGES } from "../data/messages";
import { IMeal } from "../data/types";
import { Order } from "../order/order";

export class Pizzeria {
  private ordersPizzeria: Order[] = [];
  private maxNum: number = 1;
  constructor(public name: string, public address?: string, public workingHours?: string, public orders?: Order[]) {
    if (orders && orders.length) this.ordersPizzeria.push(...orders);    
  }

  createOrder(addingMeals?: IMeal[]): Order {
    const newOrder = new Order(this.maxNum, addingMeals)
    this.ordersPizzeria.push(newOrder);
    this.maxNum++;
    return newOrder;
  }

  private getIndexOrder(num: number): number {
    return this.ordersPizzeria.findIndex(order => order.numOrder === num);
  }

  getOrder(num: number): Order|null {
    const index = this.getIndexOrder(num);
    if (index === -1) return null;
    return this.ordersPizzeria[index];
  }

  removeOrder(num: number) {
    const index = this.getIndexOrder(num);
    if (num === -1) throw new Error(ERROR_MESSAGES.NO_ORDER)
      this.ordersPizzeria.splice(index, 1);
  }
}