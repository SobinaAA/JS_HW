import { DataTable, When } from "@wdio/cucumber-framework";
import editProductPage from "../../pages/Products/editProduct.page";
import { IProduct } from "../../../data/types/product.types";
import { generateProductData } from "../../../data/products/generateProduct";
import _ from "lodash";

When(/^I fill product inputs on "Edit Product" page with following values:$/, async function (table: DataTable) {
  const product = table.rowsHash();
  await editProductPage.fillInputs(product);
});

When(/^I fill product inputs "Amount", "Price", "Manufacturer" on "Edit Product" page$/, async function () {
  const newProductData = generateProductData();
  const partlyProduct: Partial<IProduct> = _.pick(newProductData, ["amount", "price", "manufacturer"]);
  this.createdProduct = {...this.createdProduct, ...partlyProduct};
  await editProductPage.fillInputs(partlyProduct);
});
