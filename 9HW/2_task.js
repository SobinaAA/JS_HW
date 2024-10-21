"use strict";
// _________________Отсюда начинается второе задание_______________________
// 1. Реализуйте метод findEmployeeByName(firstName: string) в классе Company, который возвращает объект сотрудника, если такой найден.
// 2. Реализуйте метод removeEmployee(firstName) в классе Company, который удаляет сотрудника по имени. 
//    Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
//    Для корретной работы создайте дополнительно приватный метод getEmployeeIndex(firstName), и используйте его в removeEmployee
// 3. Добавьте метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников.
// 4. Добавление валидации для полей сотрудника в сеттеры:
//   Employee:
//     firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
//     profession — строка, не может быть пустой, только латинские буквы и пробелы.
//     salary — число, должно быть больше 0 и меньше 10000.
const alfa = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
class Employee {
    #salary;
    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get profession() {
        return this._profession;
    }
    get salary() {
        return this.#salary;
    }
    set firstName(firstName) {
        if (typeof firstName !== "string" || firstName.length <= 2 || firstName.length >= 50 || !firstName.split('').every(char => alfa.trim().includes(char))) {
        console.log('Некорректный тип данных');
        return;
        }
        this._firstName = firstName;
    }
    set lastName(lastName) {
        if (typeof lastName !== "string" || lastName.length <= 2 || lastName.length >= 50 || !lastName.split('').every(char =>alfa.trim().includes(char))) {
        console.log('Некорректный тип данных');
        return;
        }
        this._lastName = lastName;
    }
    set profession(profession) {
        if (typeof profession !== "string" || profession.length == 0 || !profession.split('').every(char => alfa.includes(char))) {
        console.log('Некорректный тип данных');
        return;
        }
        this._profession = profession;
    }
    set salary(salary) {
        if (typeof salary !== "number" || salary <= 0 || salary >= 10000) {
        console.log('Некорректный тип данных');
        return;
        } else {
            console.log(salary);
            this.#salary = salary;
            console.log(this.#salary);
        }
    }
    fullName() {
        return this._lastName + ' ' + this._firstName;
    }
}

class Company {
    #employees = [];
    constructor(title, phone, address, employees = []) {
        this.title = title;
        this.phone = phone;
        this.address = address;
        this.salary;
        for (const employee of employees) {
            this.#employees.push(employee);
        }
    }
    get title() {
        return this._title;
    }
    get phone() {
        return this._phone;
    }
    get address() {
        return this._address;
    }
    set title(title) {
        if (typeof title !== "string") {
        console.log('Некорректный тип данных');
        return;
        }
        this._title = title;
    }
    set phone(phone) {
        if (typeof phone !== "string") {
        console.log('Некорректный тип данных');
        return;
        }
        this._phone = phone;
    }
    set address(address) {
        if (typeof address !== "string") {
        console.log('Некорректный тип данных');
        return;
        }
        this._address = address;
    }
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.#employees.push(employee);
        }
    }
    getEmployees() {
        return this.#employees;
    }
    getInfo() {
        return ` Компания: ${this.title} \n Адрес: ${this.address} \n Количество сотрудников: ${this.#employees.length}`;
    }
    #getEmployeeIndex(firstName) {
        if (typeof firstName !== "string") {
            return -1;
            }
        let index = this.getEmployees().findIndex(el => el._firstName === firstName);
        return index;
    }
    findEmployeeByName(firstName) {
        let index = this.#getEmployeeIndex(firstName);
        if (index != -1) {
        return this.#employees[index];
        } else {
            console.log('Нет такого сотрудника')
        }
    }
    removeEmployee(firstName) {
        if (this.#getEmployeeIndex(firstName) != -1) {
        this.getEmployees().splice(this.#getEmployeeIndex(firstName), 1);
        } else {
            console.log('Нет такого сотрудника');
        }
    }
    getTotalSalary() {
        return this.getEmployees().reduce((sum, emp) =>  {
            sum += emp.salary;
            return sum;
        }, 0);
    }
}
// 5. Проверьте свой код:
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
    const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

    const company = new Company("Tech Corp", "123-456", "Main Street");
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    company.addEmployee(emp3);

    console.log(company.getTotalSalary()); // 12000
    console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
    company.removeEmployee("John");
    console.log(company.getEmployees()); // [Employee, Employee]
