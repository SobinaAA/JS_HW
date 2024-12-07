interface ILoginFormTestData {
  username: string;
  password: string;
  dataDescription: string;
  message: string;
}

export enum LOGIN_FORM_MESSAGES {
  SUCCESSFULLY_REGISTERED = "Successfully registered! Please, click Back to return on login page",
  USERNAME_LESS_THEN_3 = "Username should contain at least 3 characters",
  USERNAME_MORE_THEN_40 = "Username can't exceed 40 characters",
  PASSWORD_ONLY_SPACES = "Password is required",
  PASSWORD_ONLY_UPPER = "Password should contain at least one character in lower case",
  PASSWORD_ONLY_LOWER ="Password should contain at least one character in upper case",
  USERNAME_ONLY_SPACES = "Prefix and postfix spaces are not allowed is username",
  USERNAME_PREFIX_SPACES = "Prefix and postfix spaces are not allowed is username",
  USERNAME_POSTFIX_SPACES = "Prefix and postfix spaces are not allowed is username",
  PASSWORD_SHORT = "Password should contain at least 8 characters",
  LOGIN_EMPTY = "Username is required",
  PASSWORD_EMPTY = "Password is required",
  FIELDS_EMPTY = "Please, provide valid data",
  PASSWORD_MORE_THEN_20 = "Password can't exceed 20 characters",
  ALL_EMPTY_REGISTRATION = "Credentials are required",
  LOGIN_WITHOUT_REGISTRATION = "Invalid credentials",
}


export const NEGATIVE_REGISTRATION_TEST_DATA: ILoginFormTestData[] = [
  {
    username: "aa",
    password: "Qwerty 1aaaa",
    dataDescription: "min username - 1",
    message: LOGIN_FORM_MESSAGES.USERNAME_LESS_THEN_3,
  },
  {
    username: "AB4",
    password: "        ",
    dataDescription: "password contains only spaces",
    message: LOGIN_FORM_MESSAGES.PASSWORD_ONLY_SPACES,
  },
  {
    username: "Login",
    password: "ABCDEFGHIJKLM",
    dataDescription: "password contains only upper case",
    message: LOGIN_FORM_MESSAGES.PASSWORD_ONLY_UPPER,
  },
  {
    username: "Login",
    password: "abcdefgahjklm",
    dataDescription: "password contains only lower case",
    message: LOGIN_FORM_MESSAGES.PASSWORD_ONLY_LOWER
  },
  {
    username: "   ",
    password: "AbCGh26j1",
    dataDescription: "username contains only spaces",
    message: LOGIN_FORM_MESSAGES.USERNAME_ONLY_SPACES
  },
  {
    username: " ABC",
    password: "AbCGh26j1",
    dataDescription: "username contains prefix spaces",
    message: LOGIN_FORM_MESSAGES.USERNAME_PREFIX_SPACES
  },
  {
    username: "ABC ",
    password: "AbCGh26j1",
    dataDescription: "username contains postfix spaces",
    message: LOGIN_FORM_MESSAGES.USERNAME_POSTFIX_SPACES
  },
  {
    username: "AB7",
    password: "AbCGh26",
    dataDescription: "password is short, min - 1",
    message: LOGIN_FORM_MESSAGES.PASSWORD_SHORT
  },
  {
    username: "",
    password: "AbCGhrt326",
    dataDescription: "login is empty",
    message: LOGIN_FORM_MESSAGES.LOGIN_EMPTY
  },
  {
    username: "SBHW22",
    password: "",
    dataDescription: "password is empty",
    message: LOGIN_FORM_MESSAGES.PASSWORD_EMPTY
  },
  {
    username: "",
    password: "",
    dataDescription: "both fields are empty",
    message: LOGIN_FORM_MESSAGES.FIELDS_EMPTY
  },
];


export const VALID_REGISTRATION_TEST_DATA: ILoginFormTestData[] = [
  {
    username: "aaa",
    password: "Qwerty 1",
    dataDescription: "min valid data",
    message: LOGIN_FORM_MESSAGES.SUCCESSFULLY_REGISTERED,
  },
  {
    username: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    password: "Qwerty 1aaaaaaaaaaaa",
    dataDescription: "max valid data",
    message: LOGIN_FORM_MESSAGES.SUCCESSFULLY_REGISTERED,
  },
  {
    username: "aaaa",
    password: "Qwerty 1a",
    dataDescription: "min valid data + 1",
    message: LOGIN_FORM_MESSAGES.SUCCESSFULLY_REGISTERED,
  },
  {
    username: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    password: "Qwerty 1aaaaaaaaaaa",
    dataDescription: "max valid data - 1",
    message: LOGIN_FORM_MESSAGES.SUCCESSFULLY_REGISTERED,
  },
  {
    username: "aaaaaaaaaaaaaaaaaa",
    password: "Qwerty 1aaaa",
    dataDescription: "smoke data",
    message: LOGIN_FORM_MESSAGES.SUCCESSFULLY_REGISTERED,
  },
];
