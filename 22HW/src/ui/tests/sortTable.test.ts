import homePageService from "../services/homePage.service";
import productsPageService from "../services/products/productsPage.service";
import signInPageService from "../services/signInPage.service";

describe("[UI] [Tables sorting: name, price, date]", () => {


 beforeEach(async function () {
    await signInPageService.openSalesPortal();
    await signInPageService.loginAsAdmin();
  });

  it("Should sort ASC by Name", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Name", "ASC");
    await productsPageService.checkSorting("Name", "ASC");
  });

  it("Should sort DESC by Name", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Name", "DESC");
    await productsPageService.checkSorting("Name", "DESC"); 
  });

  it("Should sort ASC by Price", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Price", "ASC");
    await productsPageService.checkSorting("Price", "ASC");
  });

  it("Should sort Desc by Price", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Price", "DESC");
    await productsPageService.checkSorting("Price", "DESC");
  });

  it("Should sort ASC by Date", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Created On", "ASC");
    await productsPageService.checkSorting("Created On", "ASC");
  });

  it("Should sort DESC by Date", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Created On", "DESC");
    await productsPageService.checkSorting("Created On", "DESC");
  });

  afterEach(async () => {
    await signInPageService.signOut();
  });

})