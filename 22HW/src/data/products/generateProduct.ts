import _ from "lodash";

import { IProduct, MANUFACTURERS } from "../types/product.types";

export function generateProductData(customData?: Partial<IProduct>): IProduct {
  return {
    name: "My Test Product" + Date.now(),
    manufacturer: _.sample(MANUFACTURERS) as MANUFACTURERS,
    amount: 1 + Math.floor(Math.random()*100),
    price: Math.floor(Math.random()*1000),
    notes: "Test notes",
    ...customData,
  };
}
