// Используя сервисную архитектуру создать е2е тест со следующими шагами:
//  - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
//  - Войти в приложения используя учетные данные aqacourse@gmail.com / password 
//  - Создать продукт (модуль Products)
//  - Верифицировать текст нотификации и закрыть кликнув на крестик
//  - Открыть модалку Details для созданного продукта
//  - Верифицировать что все данные соответствуют продукту что вы создавали
//  - Закрыть модалку деталей
//  - Удалить продукт в afterHook


// - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
// - Войти в приложения используя учетные данные aqacourse@gmail.com / password 
// - Создать продукт (модуль Products)
// - Верифицировать текст нотификации и закрыть кликнув на крестик
// - Ввести название созданного продукта в поле search
// - Кликнуть по кнопке Search
// - Дождаться загрузки данных
// - Верифицировать, что:
//    1. Только 1 продукт в таблице
//    2. Продукт соответствует созданному вами
// - Удалить продукт в afterHook
import { NOFITICATIONS } from "../../data/notifications";
import { generateProductData } from "../../data/products/generateProduct";
import signInPageService from "../services/signInPage.service";
import homePageService from "../services/homePage.service";
import productsPageService from "../services/products/productsPage.service";
import addNewProductPageService from "../services/products/addNewProductPage.service";
import { IProduct } from "../../data/types/product.types";

describe("[UI] [TASK1]", () => {

  let productStorage: IProduct;
  
  beforeEach(async function () {
    await signInPageService.openSalesPortal();
    await signInPageService.loginAsAdmin();
  });


it("Should create new product", async function () {
    await homePageService.openProductsPage();
    await productsPageService.openAddNewProductPage();
    const newProductData = generateProductData();
    productStorage = newProductData;
    await addNewProductPageService.fillAndSubmit(newProductData);
    await productsPageService.validateNotification(NOFITICATIONS.PRODUCT_CREATED);
    await productsPageService.checkProductInDetails(newProductData);
  });

  it.only("Should find new product with search", async function () {
    await homePageService.openProductsPage();
    await productsPageService.openAddNewProductPage();
    const newProductData = generateProductData();
    productStorage = newProductData;
    await addNewProductPageService.fillAndSubmit(newProductData);
    await productsPageService.validateNotification(NOFITICATIONS.PRODUCT_CREATED);
    await productsPageService.checkProductInDetails(newProductData);
    await productsPageService.searchProduct(newProductData.name);
    await productsPageService.checkResultOfSearch(1);
    await productsPageService.checkProductInTable(newProductData);
  });

  afterEach(async () => {
    await productsPageService.deleteProduct(productStorage.name);
    await signInPageService.signOut();
  });
});
