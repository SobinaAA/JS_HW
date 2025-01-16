import { SalesPortalPage } from "../salesPortal.page";

export class CustomersListPage extends SalesPortalPage {
  uniqueElement = '//h2[text()="Customers List "]';
  readonly "Add New Customer button" = "button.page-title-header";
  readonly "Edit button by table row" = (customer: string) =>
    `${this["Table row selector"](customer)}//button[@title="Edit"]`;
  readonly "Empty table message" = "td.fs-italic";
  readonly "Filter Button" = "#filter";
  readonly "All Countries in the Table" = "tbody > tr > td:nth-child(3)";

  async clickOnAddNewCustomer() {
    await this.click(this["Add New Customer button"]);
  }

  async clickOnEditCustomer(customerName: string) {
    await this.click(this["Edit button by table row"](customerName));
  }

  async getEmptyTableMessage() {
    return this.getText(this["Empty table message"]);
  }

  async openFilters() {
    await this.click(this["Filter Button"]);
  }

  async getAllCountries() {
    const countries = await this.findElementArray(this["All Countries in the Table"]);
    return countries;
  }
}
