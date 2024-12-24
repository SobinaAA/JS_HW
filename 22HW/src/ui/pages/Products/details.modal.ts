import { SalesPortalPage } from "../salesPortal.page";

class DetailsProductModal extends SalesPortalPage {
  readonly ["Modal container"] = '//div[@id="details-modal-container"]';
  readonly ["Value by Field"] = (value: string) => `//*[./strong[.="${value}:"]]//following-sibling::p`
  readonly ["Close Button"] = `${this["Modal container"]}//button[@aria-label="Close"]`;  
  readonly ["Edit Button"] = `${this["Modal container"]}//button[.="Edit Product"]`;  

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this["Modal container"]);
  }

  async waitForDisappeared() {
    await this.waitForDisplayed(this["Modal container"], true);
  }

  async clickOnCloseButton() {
    await this.click(this["Close Button"]);
  }

  async getActualProductData (){
    const actualProductData = {
      name: await $(this["Value by Field"]("Name")).getText(),
      amount: Number(await $(this["Value by Field"]("Amount")).getText()),
      price: Number(await $(this["Value by Field"]("Price")).getText()),
      manufacturer: await $(this["Value by Field"]("Manufacturer")).getText(),
      notes: await $(this["Value by Field"]("Notes")).getText()
    }; 
    return actualProductData;
  }
}

export default new DetailsProductModal();