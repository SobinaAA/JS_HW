import {correctCredentials, incorrectCredentials} from "../credentials/credentials";
import * as sel from "../data/selectors";
import * as n from "../data/notifications";
describe('First homework - login and registration', () => {
    //urls
    const url = "https://anatoly-karpovich.github.io/demo-login-form/";
 
    //before and after tests
    before(async function () {
        await browser.maximizeWindow();
      });
    
    beforeEach(async function () {
        await browser.url(url);
    });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    //tests
    for (const { login, password } of correctCredentials) {
        it(`Should register user with login: ${login} and password: ${password}`, async function () {
            await $(sel.goToRegisterButtonSelector).click();
                await $(sel.registrSelectors.login).setValue(login);
                await $(sel.registrSelectors.password).setValue(password);
                await $(sel.sumbitRegister).click();
                const actualText = await $(sel.errorMessageRegisterSelector).getText();
                expect(actualText).toContain(n.successNotification);
                const stringFromStorage = await browser.execute((login) => {
                    return localStorage.getItem(login);
                }, login);
                const objectFromStorage = JSON.parse(stringFromStorage as string);
                expect(objectFromStorage.name).toBe(login);
                expect(objectFromStorage.password).toBe(password);
             });
        }

    it('Login User after registration with correct creds', async function () {
        await $(sel.goToRegisterButtonSelector).click();
        const item = Math.floor(Math.random() * correctCredentials.length);
        await $(sel.registrSelectors.login).setValue(correctCredentials[item].login);
        await $(sel.registrSelectors.password).setValue(correctCredentials[item].password);
        await $(sel.sumbitRegister).click();
        await $(sel.goToLoginButtonSelector).click();

        await $(sel.loginSelectors.login).setValue(correctCredentials[item].login);
        await $(sel.loginSelectors.password).setValue(correctCredentials[item].password);
        await $(sel.sumbitLogin).click();
        const actualText = await $(sel.successMessageLoginSelector).getText();
        expect(actualText).toContain(n.successLoginNotification + correctCredentials[item].login + '!');
        await browser.pause(3000);
    });

    it('shouldn`t login User with correct creds (no registration)', async function () {
        const item = Math.floor(Math.random() * correctCredentials.length);
        await $(sel.loginSelectors.login).setValue(correctCredentials[item].login);
        await $(sel.loginSelectors.password).setValue(correctCredentials[item].password);
        await $(sel.sumbitLogin).click();
        const actualText = await $(sel.errorMessageLoginSelector).getText();
        expect(actualText).toContain(n.invalidCredentials);
        await browser.pause(2000);
    });
    
    for (let i = 10; i <= 11; i++) {
        const item = incorrectCredentials[i];
        it(`Should return error with text ${item.errorText} when try to login with login: ${item.login} and password: ${item.password}`, async function () {
            await $(sel.goToRegisterButtonSelector).click();
            await $(sel.registrSelectors.login).setValue(item.login);
            await $(sel.registrSelectors.password).setValue(item.password);
            await $(sel.sumbitRegister).click();
            const actualText = await $(sel.errorMessageRegisterSelector).getText();
            expect(actualText).toContain(item.errorText);
            await browser.pause(1000);
        });
    }

    it('shouldn`t login User with all empty fields', async function () {
            const item = incorrectCredentials[12];
            await $(sel.loginSelectors.login).setValue(item.login);
            await $(sel.loginSelectors.password).setValue(item.password);
            await $(sel.sumbitLogin).click();
            const actualText = await $(sel.errorMessageLoginSelector).getText();
            expect(actualText).toContain(n.emptyAllNotificatyion);
            await browser.pause(2000);
        });

    for (const {login, password, errorText} of incorrectCredentials) {
        it(`Should return error with text ${errorText} when try to register with login: ${login} and password: ${password}`, async function () {
            await $(sel.goToRegisterButtonSelector).click();
            await $(sel.registrSelectors.login).setValue(login);
            await $(sel.registrSelectors.password).setValue(password);
            await $(sel.sumbitRegister).click();
            const actualText = await $(sel.errorMessageRegisterSelector).getText();
            expect(actualText).toContain(errorText);
            await browser.pause(1000);
        });
    }

    it('Check different screen`s headers', async function () {
        await $(sel.goToRegisterButtonSelector).click();
        const actualTextRegister = await $(sel.headerRegSelector).getText();
        expect(actualTextRegister).toContain(n.headerReg);

        await $(sel.goToLoginButtonSelector).click();
        const actualTextLogin = await $(sel.headerLoginSelector).getText();
        expect(actualTextLogin).toContain(n.headerLogin);

    });
    
});