import { apiConfig } from "../../../config/apiConfig";
import { homePageMock } from "../../../data/mock/home.mock";
import { STATUS_CODES } from "../../../data/statusCodes";
import { test } from "../../../fixtures/services.fixture";

// Создайте тест со следующими шагами:
//   - Создайте мок с респонсом для страницы Home (эндпоинт Metrics) 
//     с как минимум 3мя ордерами созданными в разные дни текущего месяца (не создавать ордера, а просто добавить в мок)
//   - Залогиньтесь в проект
//   - Проверить скриншотами график Orders Created Per Day

// Рекомендации:
//   - Используйте метод expect(locator).toHaveScreenshot();

test.describe(`[UI] [Home] Metrics layout - Orders CReated per Day`, async function () {
  test("Should check layout of Orders Created per Day", async function ({ signInPageService, mock, homePageService }) {
    const mockData = structuredClone(homePageMock);
    await mock.modifyReponse(apiConfig.baseUrl + apiConfig.endpoints.Metrics, mockData, STATUS_CODES.OK);
    await signInPageService.openSalesPortal();
    await homePageService.checkSheduleLayout("Orders Created Per Day");
  });

//   test("Should check layout of Customer Growth", async function ({ signInPageService, mock, homePageService }) {
//     const mockData = structuredClone(homePageMock);
//     await mock.modifyReponse(apiConfig.baseUrl + apiConfig.endpoints.Metrics, mockData, STATUS_CODES.OK);
//     await signInPageService.openSalesPortal();
//     await homePageService.checkSheduleLayout("Customer Growth");
//   });
//   test("Should check layout of Top Sold Products", async function ({ signInPageService, mock, homePageService }) {
//     const mockData = structuredClone(homePageMock);
//     await mock.modifyReponse(apiConfig.baseUrl + apiConfig.endpoints.Metrics, mockData, STATUS_CODES.OK);
//     await signInPageService.openSalesPortal();
//     await homePageService.checkSheduleLayout("Top Sold Products");
//   });
  

});
