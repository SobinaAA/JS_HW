// Разработайте смоук тест-сьют с тестами на LOGIN на странице https://anatoly-karpovich.github.io/demo-login-form/

// Требования:
//   Страница регистрации:
//     Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
//     Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
//   Страница логина:
//     Username: обязательное
//     Password: обязательное

interface ICredentials {
    login: string,
    password: string
}

describe('First homework - login and registration', () => {
    //urls
    const url = "https://anatoly-karpovich.github.io/demo-login-form/";

    //notifications and labels
    const successNotification = 'Successfully registered! Please, click Back to return on login page';
    const emptyUsernameNotificatyion = 'Username is required';
    const emptyPasswordNotificatyion = 'Password is required';
    const emptyAllNotificatyion = 'Credentials are required';
    const successLoginNotification = 'Hello, ';
    const headerReg = 'Registration';
    const headerLogin = 'Login';
    
    //selectors
    const registrSelectors: ICredentials = {
        login: '#userNameOnRegister',
        password: '#passwordOnRegister'
    }
    const goToRegisterButtonSelector  = '#registerOnLogin';
    const goToLoginButtonSelector  = '#backOnRegister';
    const sumbitLogin = '#submit';
    const sumbitRegister = '#register';    
    const errorMessageRegisterSelector = '#errorMessageOnRegister';
    const errorMessageLoginSelector = '#errorMessage';
    const successMessageLoginSelector = '#successMessage';
    const loginSelectors: ICredentials = {
        login: '#userName',
        password: '#password'
    };
    const headerRegSelector = '#registerForm';
    const headerLoginSelector = '#loginForm';

    //credentials
    const correctCredentials: ICredentials[] = [
        {   login: 'AB1',
            password: 'AbCd1234'
        },
        {   login: 'tqgkits!l lnktmwasqc',
            password: 'rftxw#rV bobfeYtRngG'
        },
        {   login: 'Алена',
            password: 'Мойсложныйпароль'
        },
        {   login: 'AB2',
            password: ' AbCd1234'
        },
        {   login: 'AB3',
            password: 'AbCd1234 '
        },
        {   login: 'AGSBWBHECHHCHHEHEHCHCHEHCHEHEHHC1hhdhhqw',
            password: 'AbCd1234 '
        }
    ];
    const incorrectCredentials: ICredentials[] = [
        {   login: 'AB4',
            password: '        '//пробелы
        },
        {   login: 'Login',
            password: 'ABCDEFGHIJKLM'//только заглавные
        },
        {   login: 'LO', //короткий
            password: 'AbCGh26j1'
        },
        {   login: '   ', //пробелы
            password: 'AbCd1234'
        },
        {   login: ' AB5', //пробелы
            password: 'AbCd1234'
        },
        {   login: 'AB6 ', //пробелы
            password: 'AbCd1234'
        },
        {   login: 'AB7',
            password: 'FBu123i' //короткий
        },
        {   login: 'AGSBWBHECHHCHHEHEHCHCHEHCHEHEHHC1hhdhhqwdfsdfs', //длинный
            password: 'AbC76YjIIo'
        },
        {   login: 'AB8',
            password: 'NLsyDrnRuvEcLIbilcqJo' //длинный
        },
    ];


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
    it('NewUser', async function () {
        await $(goToRegisterButtonSelector).click();
        for (let item of correctCredentials) {
            await $(registrSelectors.login).setValue(item.login);
            await $(registrSelectors.password).setValue(item.password);
            await $(sumbitRegister).click();
            const actualText = await $(errorMessageRegisterSelector).getText();
            expect(actualText).toContain(successNotification);
            const stringFromStorage = await browser.execute((login) => {
                return localStorage.getItem(login);
            }, item.login);
            const objectFromStorage = JSON.parse(stringFromStorage as string);
            expect(objectFromStorage.name).toBe(item.login);
            expect(objectFromStorage.password).toBe(item.password);
        }
    });

    it('LoginUser', async function () {
        await $(goToRegisterButtonSelector).click();
        const item = Math.floor(Math.random() * correctCredentials.length);
        await $(registrSelectors.login).setValue(correctCredentials[item].login);
        await $(registrSelectors.password).setValue(correctCredentials[item].password);
        await $(sumbitRegister).click();
        await $(goToLoginButtonSelector).click();

        await $(loginSelectors.login).setValue(correctCredentials[item].login);
        await $(loginSelectors.password).setValue(correctCredentials[item].password);
        await $(sumbitLogin).click();
        const actualText = await $(successMessageLoginSelector).getText();
        expect(actualText).toContain(successLoginNotification + correctCredentials[item].login + '!');
        await browser.pause(3000);
    });

    it('loginWithEmptyFields', async function () {
        const item = Math.floor(Math.random() * correctCredentials.length);
        await $(loginSelectors.login).setValue('');
        await $(loginSelectors.password).setValue(correctCredentials[item].password);
        await $(sumbitLogin).click();

        const actualTextUsername = await $(errorMessageLoginSelector).getText();
        expect(actualTextUsername).toContain(emptyUsernameNotificatyion);
        await browser.pause(2000);

        await $(loginSelectors.login).setValue(correctCredentials[item].login);
        await $(loginSelectors.password).setValue('');
        await $(sumbitLogin).click();

        const actualTextPassword = await $(errorMessageLoginSelector).getText();
        expect(actualTextPassword).toContain(emptyPasswordNotificatyion);
        await browser.pause(2000);

        await $(loginSelectors.login).setValue('');
        await $(loginSelectors.password).setValue('');
        await $(sumbitLogin).click();

        const actualTextAll = await $(errorMessageLoginSelector).getText();
        expect(actualTextAll).toContain(emptyAllNotificatyion);
        await browser.pause(2000);
    });

    it('incorrectCredentialsRegister', async function () {
        await $(goToRegisterButtonSelector).click();
        for (let item of incorrectCredentials) {
            await $(registrSelectors.login).setValue(item.login);
            await $(registrSelectors.password).setValue(item.password);
            await $(sumbitRegister).click();
            const actualText = await $(errorMessageRegisterSelector).getText();
            expect(actualText).not.toContain(successNotification);
            await browser.pause(1000);
        } 
    });

    it('buttonsAndScreensWork', async function () {
        await $(goToRegisterButtonSelector).click();
        const actualTextRegister = await $(headerRegSelector).getText();
        expect(actualTextRegister).toContain(headerReg);

        await $(goToLoginButtonSelector).click();
        const actualTextLogin = await $(headerLoginSelector).getText();
        expect(actualTextLogin).toContain(headerLogin);

    });
    
});