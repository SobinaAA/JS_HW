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
    await productsPageService.sortBy("Name", "asc");
    await productsPageService.checkSorting("Name", "asc");
  });

  it("Should sort DESC by Name", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Name", "desc");
    await productsPageService.checkSorting("Name", "desc"); 
  });

  it("Should sort ASC by Price", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Price", "asc");
    await productsPageService.checkSorting("Price", "asc");
  });

  it("Should sort Desc by Price", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Price", "desc");
    await productsPageService.checkSorting("Price", "desc");
  });

  it("Should sort ASC by Date", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Created On", "asc");
    await productsPageService.checkSorting("Created On", "asc");
  });

  it("Should sort DESC by Date", async function () {
    await homePageService.openProductsPage();
    await productsPageService.sortBy("Created On", "desc");
    await productsPageService.checkSorting("Created On", "desc");
  });

  afterEach(async () => {
    await signInPageService.signOut();
  });

})