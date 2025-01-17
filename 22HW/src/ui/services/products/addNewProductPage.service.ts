import { IProduct } from "../../../data/types/product.types";
import { logStep } from "../../../utils/reporter/decorators";
import addNewProductPage from "../../pages/Products/addNewProduct.page";
import productsPage from "../../pages/Products/products.page";
import { SalesPortalPageService } from "../salesPortalPage.service";

class AddNewProductService extends SalesPortalPageService {
  private addNewProductPage = addNewProductPage;
  private productsPage = productsPage;

  @logStep("Fill all fields to create new prodact and submit")
  async creare(product: IProduct) {
    await this.addNewProductPage.fillInputs(product);
    await this.addNewProductPage.clickOnSaveButton();
    await this.productsPage.waitForPageOpened();
  }
}

export default new AddNewProductService();
