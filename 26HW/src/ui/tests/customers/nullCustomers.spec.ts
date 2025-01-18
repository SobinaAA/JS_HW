import { apiConfig } from "../../../config/apiConfig";
import { customersPageMock } from "../../../data/mock/customers.mock";
import { STATUS_CODES } from "../../../data/statusCodes";
import { test } from "../../../fixtures/services.fixture";

// Создайте тест со следующими шагами:
//   - Создайте мок с респонсом для страницы Customers с пустым массивом Customers
//   - Залогиньтесь в проект
//   - Перейдите на страницу Customers
//   - Завалидируйте в таблице надпись "No records created yet"

// Рекомендации:
//   - Используйте класс Mock созданный в лекции

test.describe(`[UI] [Custoners] Empty List`, async function () {
  test.only("Should see empty Customers list", async function ({ signInPageService, homePageService, mock, customersPageService}) {
    const mockData = structuredClone(customersPageMock);
    await mock.modifyReponse(apiConfig.baseUrl + apiConfig.endpoints.Customers, mockData, STATUS_CODES.OK);
    await signInPageService.openSalesPortal();
    await homePageService.openCustomersPage();
    await customersPageService.validateEmptyCustomers();
  });
});

  