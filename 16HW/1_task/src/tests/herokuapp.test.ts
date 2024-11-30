// - Установить WebdriverIO
// - Добавить во wdio.conf.ts путь к папке с тестами в массив specs
// - Разработайте тест со следующими шагами:
//   1. Открыть страницу "https://the-internet.herokuapp.com/" используя browser.url()
//   2. Кликнуть по кнопке ссылке Form Authentication методом . click()
//   3. Ввести валидные username/password методом setValue()
//   4. Кликнуть Login
//   5. Завалидировать Заголовок и описание страницы, а также текст кнопки Logout

interface ILogin {
    title: string;
    subheader: string;
  }

describe('First homework - login to herokuapp', () => {
    const url = "https://the-internet.herokuapp.com/";
    const buttonMenuSelector = '[href="/login"]';
    const loginInputSelector = '#username';
    const pasInputSelector = '#password';
    const submitButtonSelector = '.radius';
    const headerAndDescriptionSelectors: ILogin = {
        title: 'h2',
        subheader: '.subheader'
    };
    const headerAndDescription: ILogin = {
        title: 'Secure Area',
        subheader: 'Welcome to the Secure Area. When you are done click logout below.'
    };
    const credentials = {
       login: 'tomsmith',
       password: 'SuperSecretPassword!' 
    }

    before(async function () {
        await browser.maximizeWindow();
      });
    
    beforeEach(async function () {
        await browser.url(url);
    });

    it('Login', async function () {
        const loginLink = $(buttonMenuSelector);
        await loginLink.click();
        await $(loginInputSelector).setValue(credentials.login);
        await $(pasInputSelector).setValue(credentials.password);
        await $(submitButtonSelector).click();
        const actualHeaderAndDesription: ILogin = {
            title: await $(headerAndDescriptionSelectors.title).getText(),
            subheader: await $(headerAndDescriptionSelectors.subheader).getText()
        } 
        expect(actualHeaderAndDesription).toMatchObject({ ...headerAndDescription });
        await browser.pause(5000);
    });
});