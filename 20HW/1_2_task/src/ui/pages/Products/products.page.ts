import { IProduct } from "../../../data/types/product.types";
import { SalesPortalPage } from "../salesPortal.page";

class ProductsPage extends SalesPortalPage {
  readonly ["Add New Product"] = "button.page-title-button";
  readonly Title = '//h2[.="Products List "]';
  readonly ["Close Notification Button"] = "button.btn-close";
  readonly Table = "#table-products";
  readonly tHeaders = ['name', 'price', 'manufacturer'];
  readonly ["Modal Submit Button"] = 'button[type="submit"].btn-danger';
  readonly ["Modal Cancel Button"] = 'button[type="button"].btn-secondary';


  async clickOnAddNewProduct() {
    await this.click(this["Add New Product"]);
  }

  async clickOnCloseNotification() {
    await this.click(this["Close Notification Button"]);
  }

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this.Title);
    await this.waitForSpinnersToBeHidden("Products");
  }

  private async getProductTable()  {
    const tableData: Partial <IProduct>[] = [];
    const rows = await $$(`${this.Table} tbody tr`).getElements();
    await rows.forEach(async (row) => {
      const cells = await row.$$("td").getElements();
      cells.pop();
      cells.pop();
      const cellsTexts = await cells.map(async (cell) => await cell.getText());
      const rowObject = this.tHeaders.reduce((obj, header, i) => {
        obj[header] = cellsTexts[i].replace('$', '');
        return obj;
      }, {} as Record<string, string>);
      tableData.push(rowObject);
    });
    return tableData;
  }

  async getNFromTheTable(n: number) {
    const table = await this.getProductTable();
    return table[n];    
  }

  async searchInTheTable(s: string) {
    const table = await this.getProductTable();
    return table.findIndex(obj => obj.name === s);
  }

  async deleteNProduct(n: number) {
    const deleteButtons = await $$(`${this.Table} tbody tr button.text-danger`).getElements();
    await deleteButtons[n].click();
  }

  async confirmDeletion() {
    await this.waitForDisplayed(this["Modal Submit Button"]);
    await this.click(this["Modal Submit Button"]);
  }
}

export default new ProductsPage();
