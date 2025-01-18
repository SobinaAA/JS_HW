// Создать е2е тест со следующими шагами:
//   Прекондишен:
//     - Открыть Sales Portal
//     - Залогиниться
//     - Перейти на страницу Customers List
//   Тесты:
//     - Открыть модалку фильтров
//     - Выбрать один фильтр (например USA)
//     - Отфильтровать таблицу
//     - Проверить что в таблице все кастомеры из USA
// Улучшите тест из таск 1, сделав параметризированным:
//   - Создайте цикл и набор фильтров
//   - На каждой итерации циклов тестируйте один фильтр

import test, { expect } from "@playwright/test";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../../../config/env";
import { CustomersListPage } from "../../pages/customers/customers.page";
import { HomePage } from "../../pages/home.page";
import { SignInPage } from "../../pages/signIn.page";
import { COUNTRIES } from "../../../data/customers/countries";
import { FilterModal } from "../../pages/customers/filterModal.page";

test.describe("[UI] [Customers] [Table Filters]", async function () {
    test.beforeEach(async function ({ page }) {
        const loginPage = new SignInPage(page);
        const homePage = new HomePage(page);
        const customersPage = new CustomersListPage(page);

        await loginPage.openLoginPage();
        await loginPage.fillCredentialsInputs({
        username: ADMIN_USERNAME,
        password: ADMIN_PASSWORD,
        });
        await loginPage.clickSubmitButton();
        await homePage.waitForOpened();
        await homePage.clickOnViewDetailsButton("Customers");
        await customersPage.waitForOpened();
    })

    for (const iter in COUNTRIES) {
        const country = COUNTRIES[iter];
        test(`Should filter the table with ${country}`, async ({ page }) => {
            const customersPage = new CustomersListPage(page);
            const filterModal = new FilterModal(page);
            await customersPage.openFilters();
            console.log(country);

            await filterModal.chooseCountry(country);
            await filterModal.submitFilters();
            
            await customersPage.waitForOpened();
            const actualCountries = await customersPage.getAllCountries();
            const allFiltred = actualCountries.every(async (elem) => {
                const actual = await elem.innerText();
                return actual === country});
            expect(allFiltred).toBeTruthy();
        })
    }

});