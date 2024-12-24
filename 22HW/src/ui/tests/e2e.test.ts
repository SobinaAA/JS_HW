// import { NOFITICATIONS } from "../../data/notifications";
// import { generateProductData } from "../../data/products/generateProduct";
// import signInPageService from "../services/signInPage.service";
// import homePageService from "../services/homePage.service";
// import productsPageService from "../services/products/productsPage.service";
// import addNewProductPageService from "../services/products/addNewProductPage.service";
// import { IProduct } from "../../data/types/product.types";

// describe("[UI] [TASK1]", () => {

//   let productStorage: IProduct;
  
//   beforeEach(async function () {
//     await signInPageService.openSalesPortal();
//     await signInPageService.loginAsAdmin();
//   });


// it("Should create new product", async function () {
//     await homePageService.openProductsPage();
//     await productsPageService.openAddNewProductPage();
//     const newProductData = generateProductData();
//     productStorage = newProductData;
//     await addNewProductPageService.fillAndSubmit(newProductData);
//     await productsPageService.validateNotification(NOFITICATIONS.PRODUCT_CREATED);
//     await productsPageService.checkProductInDetails(newProductData);
//   });

//   it("Should find new product with search", async function () {
//     await homePageService.openProductsPage();
//     await productsPageService.openAddNewProductPage();
//     const newProductData = generateProductData();
//     productStorage = newProductData;
//     await addNewProductPageService.fillAndSubmit(newProductData);
//     await productsPageService.validateNotification(NOFITICATIONS.PRODUCT_CREATED);
//     await productsPageService.checkProductInDetails(newProductData);
//     await productsPageService.searchProduct(newProductData.name);
//     await productsPageService.checkResultOfSearch(1);
//     await productsPageService.checkProductInTable(newProductData);
//   });

//   afterEach(async () => {
//     await productsPageService.deleteProduct(productStorage.name);
//     await signInPageService.signOut();
//   });
// });
