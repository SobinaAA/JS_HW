import {IMeal} from '../data/types';
export abstract class Meal implements IMeal {
  public fullPrice: number;

  constructor(public name: string) {
    this.fullPrice = this.calculatePrice();
  }

  abstract calculatePrice(): number;

  getPrice(): number {
    return this.fullPrice;
  }

}