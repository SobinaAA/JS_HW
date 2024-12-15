import _ from "lodash";
import { IProduct } from "../../../data/types/product.types";
import addNewProductPage from "../../pages/Products/addNewProduct.page";
import productsPage from "../../pages/Products/products.page";
import { SalesPortalPageService } from "../salesPortalPage.service";

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
    const actualProductData = {
      name: await $(this.productsPage["Details Modal"]["Name Field"]).getText(),
      amount: Number(await $(this.productsPage["Details Modal"]["Amount Field"]).getText()),
      price: Number(await $(this.productsPage["Details Modal"]["Price Field"]).getText()),
      manufacturer: await $(this.productsPage["Details Modal"]["Manufacturer Field"]).getText(),
      notes: await $(this.productsPage["Details Modal"]["Notes Field"]).getText()
    }; 
    expect(actualProductData).toEqual(expectedProductData);
    await this.productsPage["Details Modal"].clickOnCloseButton();
  }

  async searchProduct(text: string) {
    await this.productsPage.fillSearchField(text);
    await this.productsPage.clickSearchButton();
    await this.productsPage.waitForSpinnersToBeHidden("productsPage");
    const rows = await this.productsPage.findArrayOfElements(this.productsPage["Table Rows"]);
    const len = rows.length;
    expect (len).toBe(1);
  }

}

export default new ProductsPageService();
