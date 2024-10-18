"use strict";
// 1. Создайте класс Employee с полями:
//   firstName — имя сотрудника (строка).
//   lastName — фамилия сотрудника (строка).
//   profession — профессия сотрудника (строка).
//   Приватное поле salary — зарплата сотрудника (число).
// 2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
// 3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
// 4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     console.log(emp1.firstName); // "John"
//     emp1.salary = 3100;
//     console.log(emp1.age); // 3100
// 5. Создайте класс Company с полями:
//     title — название компании (строка).
//     phone — телефон компании (число).
//     address — адрес компании (строка).
//     Приватное поле employees — массив сотрудников (пустой массив на старте).
// 6. Реализуйте геттеры для полей title, phone, и address.
// 7. Добавьте методы:
//     addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
//     getEmployees() - возвращает массив всех сотрудников.
// 8. Проверьте корректную работу:
//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     console.log(company.getEmployees()); // [Employee, Employee]
// 9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
// Компания: 
// Адрес:
// Количество сотрудников:
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
        if (typeof firstName !== "string") {
        console.log('Некорректный тип данных');
        return;
        }
        this._firstName = firstName;
    }
    set lastName(lastName) {
        if (typeof lastName !== "string") {
        console.log('Некорректный тип данных');
        return;
        }
        this._lastName = lastName;
    }
    set profession(profession) {
        if (typeof profession !== "string") {
        console.log('Некорректный тип данных');
        return;
        }
        this._profession = profession;
    }
    set salary(salary) {
        if (typeof salary !== "number") {
        console.log('Некорректный тип данных');
        return;
        }
        this.#salary = salary;
    }
    fullName() {
        return this._lastName + ' ' + this._firstName;
    }
}
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    console.log(emp1.firstName); // "John"
    emp1.salary = 3100;
    console.log(emp1.age); // 3100 - пример-ловушка в задании? :)
    console.log(emp1.salary); // 3100
    const emp2 = new Employee("Alena", "Sobina", "QA", 100500);
    console.log(emp2.fullName()); // 3100
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
        return ` Компания: ${this.title} \n Адрес: ${this.address} \n Количество сотрудников: ${this.#employees.length}`
    }
}
const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); 
console.log(company.getInfo()); 