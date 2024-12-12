// Написать Page Object класс для страницы Sign In:
//   - email input
//   - password input
//   - login button
//   - fillCredentials method
//   - click on login button method

// Разработать е2е тест со следующими шагами:
//  - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
//  - Войти в приложения используя учетные данные aqacourse@gmail.com / password 
//  - Создать продукт (модуль Products)
//  - Верифицировать текст нотификации и закрыть кликнув на крестик
//  - Верифицировать созданный продукт в таблице (должен быть самым верхним)
//  - Удалить продукт через ui (кликнув по икнонке урны в таблице и далее в в модалке)
//  - Завалидировать нотификацию удаления
//  - Удостовериться, что продута в таблице нет (можно функционалом search)

import { NOFITICATIONS } from "../../data/notifications";
import { generateProductData } from "../../data/products/generateProduct";
import signinPage from "../pages/signin.page";
import homePage from "../pages/home.page";
import addNewProductPage from "../pages/Products/addNewProduct.page";
import productsPage from "../pages/Products/products.page";
import { CREDS } from "../../data/credentials";
import { IProduct } from "../../data/types/product.types";

let product: IProduct;

describe("[UI] [E2E]", () => {
    beforeEach(async function () {
});

it("Should log in with correct data", async function () {
    await browser.url("https://anatoly-karpovich.github.io/aqa-course-project/");
    await signinPage.waitForPageOpened();
    await signinPage.fillCredentials(CREDS[0]);
    await signinPage.clickOnSubmitButton();
    await homePage.waitForPageOpened();
  });

it("Should create new product", async function () {
    await homePage.clickOnMenuButton("Products");
    await productsPage.waitForPageOpened();
    await productsPage.clickOnAddNewProduct();
    await addNewProductPage.waitForPageOpened();
    const newProductData = generateProductData();
    product = newProductData;
    await addNewProductPage.fillInputs(newProductData);
    await addNewProductPage.clickOnSaveButton();
    const notificationText = await productsPage.getNotificationText();
    expect(notificationText).toBe(NOFITICATIONS.PRODUCT_CREATED);
    await productsPage.clickOnCloseNotification();
    //const firstProduct = await productsPage.getFirstFromTheTable();
    const firstProduct = await productsPage.getNFromTheTable(0);
    for (const key in firstProduct) {
      expect(newProductData[key as keyof typeof newProductData] + '').toBe(firstProduct[key as keyof typeof firstProduct]);
    };
  });

  it("Should delete new product", async function () {
    await productsPage.deleteNProduct(0);
    await productsPage.confirmDeletion();
    const notificationText = await productsPage.getNotificationText();
    expect(notificationText).toBe(NOFITICATIONS.PRODUCT_DELETED);
    await productsPage.clickOnCloseNotification();
    const index = await productsPage.searchInTheTable(product.name);
    expect(index).toEqual(-1);
  });
});
