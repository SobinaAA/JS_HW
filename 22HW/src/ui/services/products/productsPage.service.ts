import _ from "lodash";
import { IProduct } from "../../../data/types/product.types";
import addNewProductPage from "../../pages/Products/addNewProduct.page";
import productsPage from "../../pages/Products/products.page";
import { SalesPortalPageService } from "../salesPortalPage.service";
import { direction, sortMethod } from "../../../data/types/sorting.types";

class ProductsPageService extends SalesPortalPageService {
  private productsPage = productsPage;
  private addNewProductPage = addNewProductPage;

  async openAddNewProductPage() {
    await this.productsPage.clickOnAddNewProduct();
    await this.addNewProductPage.waitForPageOpened();
  }

  async checkProductInTable(product: IProduct) {
    const actualProductData = await this.productsPage.getProductFromTable(product.name);
    const expectedProductData = _.pick(product, ["name", "price", "manufacturer"]);
    expect(actualProductData).toEqual(expectedProductData);
  }

  async deleteProduct(productName: string) {
    await this.productsPage.clickOnDeleteProductButton(productName);
    await this.productsPage["Delete Modal"].waitForPageOpened();
    await this.productsPage["Delete Modal"].clickOnDeleteButton();
    await this.productsPage["Delete Modal"].waitForDisappeared();
    await this.productsPage.waitForPageOpened();
  }
  
  async checkProductInDetails(product: IProduct) {
    await this.productsPage.clickOnDetailsProductButton(product.name);
    await this.productsPage["Details Modal"].waitForPageOpened();
    const expectedProductData = _.pick(product, ["name", "price", "amount", "manufacturer", "notes"]);
    const actualProductData = await this.productsPage["Details Modal"].getActualProductData();
    expect(actualProductData).toEqual(expectedProductData);
    await this.productsPage["Details Modal"].clickOnCloseButton();
  }

  async searchProduct(text: string) {
    await this.productsPage.fillSearchField(text);
    await this.productsPage.clickSearchButton();
    await this.productsPage.waitForSpinnersToBeHidden("productsPage");
  }

  async checkResultOfSearch(n: number) {
  const rows = await this.productsPage.findArrayOfElements(this.productsPage["Table Rows"]);
  const len = rows.length;
  expect (len).toBe(n);
  }


  async sortBy(method: sortMethod) {
    await this.productsPage.clickOnTableHeader(method);
    }  

    async checkSorting(field: sortMethod, dir: direction) {
      const table = await this.productsPage.getProductTable() as Record<string, string>[];
      let mySortedTable: Record<string, string>[];
      switch (field) {
        case "Name":
          mySortedTable = dir === "ASC"? table.sort((prod1, prod2) => prod1['name'].localeCompare(prod2['name'])): table.sort((prod1, prod2) => prod2['name'].localeCompare(prod1['name']))
          break;
        case "Price":
          mySortedTable = dir === "ASC"? table.sort((prod1, prod2) => +prod1['price'] - +prod2['price']): table.sort((prod1, prod2) => +prod2['price'] - +prod1['price']);
          break;
        case "Created On":
          mySortedTable = dir === "ASC"? table.sort((prod1, prod2) => Date.parse(prod1['price']) - Date.parse(prod2['price'])): table.sort((prod1, prod2) => Date.parse(prod2['price']) - Date.parse(prod1['price']));
          break;
        default:
          throw new Error("Другие методы пока не реализованы!")
      }
      const check = _.isEqual(table, mySortedTable);
      expect (check).toBe(true);
    }

}

export default new ProductsPageService();
