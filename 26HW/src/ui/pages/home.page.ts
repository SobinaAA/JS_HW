import { Metric, Shedule } from "../../data/types/home.types.js";
import { SalesPortalPage } from "./salesPortal.page.js";

export class HomePage extends SalesPortalPage {
  uniqueElement = '//strong[.="AQA User"]';

  readonly "Orders button" = this.findElement("#orders-from-home");
  readonly "Products button" = this.findElement("#products-from-home");
  readonly "Customers button" = this.findElement("#customers-from-home");
  readonly "Total Orders Metric container" = this.findElement("#total-orders-container");
  readonly "Total Orders Metric value" = this["Total Orders Metric container"].locator("p");
  readonly "Total Revenue Metric container" = this.findElement("#total-revenue-container");
  readonly "Total Revenue Metric value" = this["Total Revenue Metric container"].locator("p");
  readonly "New Customers Metric container" = this.findElement("#total-customers-container");
  readonly "New Customers Metric value" = this["New Customers Metric container"].locator("p");
  readonly "Avg Order Value Metric container" = this.findElement("#avg-orders-value-container");
  readonly "Avg Order Value Metric value" = this["Avg Order Value Metric container"].locator("p");
  readonly "Canceled Orders Metric container" = this.findElement("#canceled-orders-container");
  readonly "Canceled Orders Metric value" = this["Canceled Orders Metric container"].locator("p");
  readonly "Orders Created Per Day Shedule container" = this.findElement("#orders-chart-container");
  readonly "Customer Growth Shedule container" = this.findElement("#customer-growth-chart-container");
  readonly "Top Sold Products Shedule container" = this.findElement("top-products-chart-container");

  async clickOnViewDetailsButton(moduleName: "Products" | "Customers" | "Orders") {
    await this.click(this[`${moduleName} button`]);
  }

  getMetricContainer(metricName: Metric) {
    return this[`${metricName} Metric container`];
  }

  getSheduleContainer(sheduleName: Shedule) {
    return this[`${sheduleName} Shedule container`];
  }

  async getMetricValue(metricName: Metric) {
    switch (metricName) {
      case "Total Orders": {
        return +(await this.getText(this[`Total Orders Metric value`]));
      }

      case "Total Revenue": {
        return await this.getText(this[`Total Revenue Metric value`]);
      }

      case "Avg Order Value": {
        return await this.getText(this[`Avg Order Value Metric value`]);
      }

      case "Canceled Orders": {
        return +(await this.getText(this[`Canceled Orders Metric value`]));
      }

      case "New Customers": {
        return +(await this.getText(this[`New Customers Metric value`]));
      }
    }
  }
}
