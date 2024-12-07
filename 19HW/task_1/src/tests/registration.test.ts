// Создать тест сьют используя DDT подход с негативными тест-кейсами по регистрации на сайте
// https://anatoly-karpovich.github.io/demo-login-form/

// Требования:
// Страница регистрации:
//   Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
//   Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен

// Страница логина:
//   Username: обязательное
//   Password: обязательное


import {
    LOGIN_FORM_MESSAGES,
    NEGATIVE_REGISTRATION_TEST_DATA,
    VALID_REGISTRATION_TEST_DATA,
  } from "../data/register.data";
import { usernameSelector, passrodSelector, registerButton, messageSelector, formSelector, goToRegisterButton, usernameLogin, usernamePassword, sumbitLogin, errorMessageLoginSelector } from "../data/selectors";
  
  
  describe("[UI] Registration form", async function () {
    before(async function () {
        await browser.maximizeWindow();
      });

    beforeEach(async function () {
      await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
      await $(goToRegisterButton).click();
    });
  
    context("Negative scenarios", async function () {
      NEGATIVE_REGISTRATION_TEST_DATA.forEach(({ username, password, dataDescription, message }) => {
        it(`Should not register with ${dataDescription}`, async function () {
          await $(usernameSelector).setValue(username);
          await $(passrodSelector).setValue(password);
          await $(registerButton).click();
          await expect($(messageSelector)).toHaveText(message);
        });
      });
      it("Should not register with 41 characters in username", async function () {
        await browser.execute(async function () {
          const username = .spinner-border"userNameOnRegister");
          username?.removeAttribute("maxlength");
        });
        const form = $(formSelector);
        await form.$(usernameSelector).setValue("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        await form.$(passrodSelector).setValue("Qwerty 1aaaa");
        await form.$(registerButton).click();
        await expect(form.$(messageSelector)).toHaveText(LOGIN_FORM_MESSAGES.USERNAME_MORE_THEN_40);
      });
      it("Should not register with 21 characters in password", async function () {
        await browser.execute(async function () {
          const password = document.getElementById("passwordOnRegister");
          password?.removeAttribute("maxlength");
        });
        const form = $(formSelector);
        await form.$(passrodSelector).setValue("123FgTerjeu&361254782");
        await form.$(usernameSelector).setValue("Qwerty");
        await form.$(registerButton).click();
        await expect(form.$(messageSelector)).toHaveText(LOGIN_FORM_MESSAGES.PASSWORD_MORE_THEN_20);
      });
    });
  });

  describe("[UI] Login form", async function () {
    before(async function () {
        await browser.maximizeWindow();
      });

    beforeEach(async function () {
      await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
    });
    context("Negative scenarios", async function () {
        it('shouldn`t login User with all empty fields', async function () {
            await $(usernameLogin).setValue('');
            await $(usernamePassword).setValue('');
            await $(sumbitLogin).click();
            const actualText = await $(errorMessageLoginSelector).getText();
            expect(actualText).toContain(LOGIN_FORM_MESSAGES.ALL_EMPTY_REGISTRATION);
        });
        it('shouldn`t login User with correct creds (no registration)', async function () {
            const item = Math.floor(Math.random() * VALID_REGISTRATION_TEST_DATA.length);
            await $(usernameLogin).setValue(VALID_REGISTRATION_TEST_DATA[item].username);
            await $(usernamePassword).setValue(VALID_REGISTRATION_TEST_DATA[item].password);
            await $(sumbitLogin).click();
            const actualText = await $(errorMessageLoginSelector).getText();
            expect(actualText).toContain(LOGIN_FORM_MESSAGES.LOGIN_WITHOUT_REGISTRATION);
        });
        it('shouldn`t login User with empty password', async function () {
            await $(usernameLogin).setValue('HEHfdgye');
            await $(usernamePassword).setValue('');
            await $(sumbitLogin).click();
            const actualText = await $(errorMessageLoginSelector).getText();
            expect(actualText).toContain(LOGIN_FORM_MESSAGES.PASSWORD_EMPTY);
        });
        it('shouldn`t login User with username', async function () {
            await $(usernameLogin).setValue('');
            await $(usernamePassword).setValue('KJBehbcyeu6');
            await $(sumbitLogin).click();
            const actualText = await $(errorMessageLoginSelector).getText();
            expect(actualText).toContain(LOGIN_FORM_MESSAGES.LOGIN_EMPTY);
        });


    })
});