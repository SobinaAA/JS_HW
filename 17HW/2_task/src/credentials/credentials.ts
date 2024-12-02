export interface ICredentials {
    login: string,
    password: string,
    errorText?: string
}
export const correctCredentials: ICredentials[] = [
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
export const incorrectCredentials: ICredentials[] = [
    {   login: 'AB4',
        password: '        ', //пробелы,
        errorText: 'Password is required'
    },
    {   login: 'Login',
        password: 'ABCDEFGHIJKLM', //только заглавные
        errorText: 'Password should contain at least one character in lower case'
    },
    {   login: 'Login',
        password: 'abcdefgahjklm', //только маленькие
        errorText: 'Password should contain at least one character in upper case'
    },
    {   login: 'LO', //короткий
        password: 'AbCGh26j1',
        errorText: 'Username should contain at least 3 characters'
    },
    {   login: '   ', //пробелы
        password: 'AbCd1234',
        errorText: 'Prefix and postfix spaces are not allowed is username'
    },
    {   login: ' AB5', //пробелы
        password: 'AbCd1234',
        errorText: 'Prefix and postfix spaces are not allowed is username'
    },
    {   login: 'AB6 ', //пробелы
        password: 'AbCd1234',
        errorText: 'Prefix and postfix spaces are not allowed is username'
    },
    {   login: 'AB7',
        password: 'FBu123i', //короткий,
        errorText: 'Password should contain at least 8 characters'
    },
    {   login: 'AGSBWBHECHHCHHEHEHCHCHEHCHEHEHHC1hhdhhqwdfsdfs', //длинный
        password: 'AbC76YjIIo',
        errorText: 'Invalid credentials'
    },
    {   login: 'AB8',
        password: 'NLsyDrnRuvEcLIbilcqJo', //длинный,
        errorText: 'Invalid credentials'
    },
];