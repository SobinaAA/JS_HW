import _ from "lodash";
import { faker } from "@faker-js/faker";

import { IProduct, MANUFACTURERS } from "../types/product.types";

export function generateProductData(customData?: Partial<IProduct>): IProduct {
  return {
    name: faker.commerce.product() + faker.number.int({ min: 1, max: 100000 }),
    manufacturer: _.sample(MANUFACTURERS) as MANUFACTURERS,
    amount: 1 + Math.floor(Math.random()*999),
    price: Math.floor(Math.random()*99999),
    notes: faker.string.alphanumeric({ length: 250 }),
    ...customData,
  };
}
