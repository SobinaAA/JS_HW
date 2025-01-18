import { Then} from "@wdio/cucumber-framework";
import _ from "lodash";
import productsPageService from "../../services/Products/productsPage.service";
import DetailsProductModal from "../../pages/Products/details.modal";

Then(/^I check "([^"]*)" of the product on "Details Modal" page$/, async function (value: string) {
    const createdProduct = this.createdProduct;
    const actualProductData = await DetailsProductModal.getActualProductData();
    expect(createdProduct[value]).toBe(actualProductData[value]);
  });
  
Then(/^I close modal on "Details Modal" page$/, async function () {
    await productsPageService.closeDetailsModal();
  });

Then(/^I check all fields for created product on "Details Modal" page$/, async function () {
    const createdProduct = this.createdProduct;
    productsPageService.checkProductInDetails(createdProduct);
  });  

  