export interface IMeal {
  readonly name: string;
  getPrice(): number;
}

export enum DOUGH_TYPE {
  THICK = 'Пышное тесто',
  THIN = 'Тонкое тесто'
}

export enum PIZZA_SIZE {
  SMALL = 'Маленькая',
  MEDIUM = 'Средняя',
  LARGE = 'Большая'
}
