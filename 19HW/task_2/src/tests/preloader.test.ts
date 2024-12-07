// Разработать тест со следующими шагами:
//  - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
//  - Войти в приложения используя учетные данные aqacourse@gmail.com / password при этом:
//  - проверить исчезновение ВСЕХ спиннеров с помощью waitUntil метода
//  - проверить действительно ли пользователь с логином AQA User вошел в систему

import { creds } from "../data/credentials";
import { buttonSubmit, emailInput, passwordInput, spinners, nameSelector } from "../data/selectors";


describe("Destroy all spinners", async function () {
    before(async function () {
        await browser.maximizeWindow();
        await browser.url("https://anatoly-karpovich.github.io/aqa-course-project/#");
      });


    it("Should login with correct creds and wait while all spiners will vanish", async function () {
        await $(emailInput).setValue(creds.login);
        await $(passwordInput).setValue(creds.password);
        await $(buttonSubmit).click();
        await browser.waitUntil(
            async () => {
                const spinnersElements = (await $$(spinners).getElements());
                const isSomeDisplayed = await spinnersElements.some<WebdriverIO.Element>(async (elem) => elem.isDisplayed());
                console.log(spinnersElements.length);
                console.log(`${isSomeDisplayed === true? 'Что-то виднеется на странице, ждем!' : 'Все пропало давно, гаси WaitUntil!'}`);
                return !isSomeDisplayed;
            },
            {
              timeout: 10000,
              timeoutMsg: "Spinners not wanished within 10 seconds",
              interval: 500,
            }
          );
          const actualText = await $(nameSelector).getText();
          expect(actualText).toContain(creds.name); 
      });
  
});