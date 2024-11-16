import { TOPPINGS } from './prices';
import {PIZZA_SIZE} from './types';
//Енам с названиями ваших пицц
export enum PIZZA_NAMES {
  THREECHEESES = '3 сыра',
  MARGHERITA = 'Маргарита',
  SEA = 'С морепродуктами',
  GAWAII = 'Гавайская',
  PEPPERONI = 'Пепперони',
  CLOSEDCHICKEN = 'Закрытая с курицей'
}
export type toppingsType = keyof typeof TOPPINGS; 

export type PizzaRecept = Record<PIZZA_NAMES, {'toppings': toppingsType[], 'prices': Record<PIZZA_SIZE, number>}>;
//прописать подробно тип рецептов!
export const pizzaReceipts : PizzaRecept = {
  [PIZZA_NAMES.THREECHEESES]: {
    toppings: ['cheese', 'onion', 'oil'],
    prices: {
      [PIZZA_SIZE.SMALL]: 20,
      [PIZZA_SIZE.MEDIUM]: 50,
      [PIZZA_SIZE.LARGE]: 70,
    }
  },

  [PIZZA_NAMES.MARGHERITA]: {
    toppings: ['onion', 'oil', 'tomatoes'],
    prices: {
      [PIZZA_SIZE.SMALL]: 10,
      [PIZZA_SIZE.MEDIUM]: 30,
      [PIZZA_SIZE.LARGE]: 50,
    }
  },  

  [PIZZA_NAMES.SEA]: {
    toppings: ['seafood', 'fish', 'oil', 'onion'],
    prices: {
      [PIZZA_SIZE.SMALL]: 20,
      [PIZZA_SIZE.MEDIUM]: 30,
      [PIZZA_SIZE.LARGE]: 40,
    }
  },

  [PIZZA_NAMES.GAWAII]: {
    toppings: ['cheese', 'chicken', 'pineapple'],
    prices: {
      [PIZZA_SIZE.SMALL]: 50,
      [PIZZA_SIZE.MEDIUM]: 70,
      [PIZZA_SIZE.LARGE]: 90,
    }
  },

  [PIZZA_NAMES.PEPPERONI]: {
    toppings: ['cheese', 'sausage', 'tomatoes', 'oil'],
    prices: {
      [PIZZA_SIZE.SMALL]: 10,
      [PIZZA_SIZE.MEDIUM]: 20,
      [PIZZA_SIZE.LARGE]: 30,
    }
  },

  [PIZZA_NAMES.CLOSEDCHICKEN]: {
    toppings: ['cheese', 'chicken', 'onion', 'mushrooms'],
    prices: {
      [PIZZA_SIZE.SMALL]: 20,
      [PIZZA_SIZE.MEDIUM]: 40,
      [PIZZA_SIZE.LARGE]: 60,
    }
  }
};
