import { direction, ISort, sortMethod } from "../../../data/types/sorting.types";
import { SalesPortalPage } from "../salesPortal.page";
import deleteProductModal from "./deleteProduct.modal";
import detailsProductModal from "./details.modal";


class ProductsPage extends SalesPortalPage {
  private ["Details Modal"] = detailsProductModal;
  readonly ["Delete Modal"] = deleteProductModal;
  readonly ["Add New Product"] = "button.page-title-button";
  readonly Title = '//h2[.="Products List "]';
  readonly ["Table row"] = (productName: string) => `//tr[./td[.="${productName}"]]`;
  readonly ["Product Name in table"] = (productName: string) => `${this["Table row"](productName)}/td[1]`;
  readonly ["Product Price in table"] = (productName: string) => `${this["Table row"](productName)}/td[2]`;
  readonly ["Product Manufacturer in table"] = (productName: string) => `${this["Table row"](productName)}/td[3]`;
  readonly ["Product Creation Date in table"] = (productName: string) => `${this["Table row"](productName)}/td[4]`;
  readonly ["Product Delete button in table"] = (productName: string) =>
    `${this["Table row"](productName)}//button[@title="Delete"]`;
  readonly ["Product Details button in table"] = (productName: string) =>
    `${this["Table row"](productName)}//button[@title="Details"]`;
  readonly ["Search Field"] = 'input[type="search"]';
  readonly ["Search Button"] = 'button[type="submit"]';
  readonly ["Table Rows"] = "table tbody tr";

  readonly ["Sort by Value"] = (Value: string) => `//div[.="${Value}"]`;
  readonly Table = "#table-products";
  readonly tHeaders = ['name', 'price', 'manufacturer', 'created on'];
  readonly arrowSelector = "i[contains(@class, 'arrow')]";
  readonly fieldWithArrow = `//div[./${this.arrowSelector}]/preceding-sibling::div`
 

  async clickOnAddNewProduct() {
    await this.click(this["Add New Product"]);
  }

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this.Title);
    await this.waitForSpinnersToBeHidden("Products");
  }

  async getProductFromTable(productName: string) {
    const [name, price, manufacturer] = await Promise.all([
      this.getText(this["Product Name in table"](productName)),
      this.getText(this["Product Price in table"](productName)),
      this.getText(this["Product Manufacturer in table"](productName)),
    ]);
    return {
      name,
      price: +price.replace("$", ""),
      manufacturer,
    };
  }

  async clickOnDeleteProductButton(productName: string) {
    await this.click(this["Product Delete button in table"](productName));
  }

  async clickOnDetailsProductButton(productName: string) {
    await this.click(this["Product Details button in table"](productName));
  }
  async fillSearchField(text: string) {
    await this.setValue(this["Search Field"], text);
  }

  async clickSearchButton() {
    await this.click(this["Search Button"]);
  }

  async clickOnTableHeader(value: string) {
    await this.click(this["Sort by Value"](value));
    await this.waitForSpinnersToBeHidden('Products');
  }
  
  async getProductTable()  {
    const tableData: Record<string, string>[] = [];
    const rows = await $$(`${this.Table} tbody tr`).getElements();
    await rows.forEach(async (row) => {
      const cells = await row.$$("td").getElements();
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

  async toKnowSortingFieldAndDirection() {
    const arrow = await this.findElement("//" + this.arrowSelector);
    const arrowClass = await arrow.getAttribute('class');
    const direction: direction = arrowClass.includes('up')? 'DESC': 'ASC';
    const sortField: sortMethod = await this.getText(this.fieldWithArrow) as sortMethod;
    const objSort: ISort = {
      field: sortField,
      direction: direction
    };
    console.log(objSort);
    return objSort
  }

  async getSortedTable(field: sortMethod, dir: direction) {
    const table = await this.getProductTable() as Record<string, string>[];
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
    return mySortedTable;
  }


}

export default new ProductsPage();
