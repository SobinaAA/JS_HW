import {ICredentials} from "../credentials/credentials";

export const registrSelectors: ICredentials = {
    login: '#userNameOnRegister',
    password: '#passwordOnRegister'
}
export const goToRegisterButtonSelector  = '#registerOnLogin';
export const goToLoginButtonSelector  = '#backOnRegister';
export const sumbitLogin = '#submit';
export const sumbitRegister = '#register';    
export const errorMessageRegisterSelector = '#errorMessageOnRegister';
export const errorMessageLoginSelector = '#errorMessage';
export const successMessageLoginSelector = '#successMessage';
export const loginSelectors: ICredentials = {
    login: '#userName',
    password: '#password'
};
export const headerRegSelector = '#registerForm';
export const headerLoginSelector = '#loginForm';