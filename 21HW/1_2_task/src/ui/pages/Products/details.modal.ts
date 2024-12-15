import { SalesPortalPage } from "../salesPortal.page";

class DetailsProductModal extends SalesPortalPage {
  readonly ["Modal container"] = '//div[@id="details-modal-container"]';
  readonly ["Name Field"] = `${this["Modal container"]}//div[./h6/i[contains(@class, "tag")]]//p`;
  readonly ["Amount Field"] = `${this["Modal container"]}//div[./h6/i[contains(@class, "basket")]]//p`;
  readonly ["Price Field"] = `${this["Modal container"]}//div[./h6/i[contains(@class, "dollar")]]//p`;
  readonly ["Manufacturer Field"] = `${this["Modal container"]}//div[./h6/i[contains(@class, "building")]]//p`;
  readonly ["Notes Field"] = `${this["Modal container"]}//div[./h6/i[contains(@class, "journal")]]//p`;  
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
}

export default new DetailsProductModal();