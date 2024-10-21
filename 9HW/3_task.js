"use strict";
// Теперь, вместо того чтобы указывать профессию в объекте класса Employee, 
// создайте подклассы для разных типов сотрудников — Developer, Manager, и Designer, — которые будут наследовать класс Employee. 
// В каждом из подклассов добавьте специфические поля и методы, уникальные для этих профессий. 
// Также реализуйте методы в классе Company, позволяющие работать с разными типами сотрудников.
// 1. Создайте базовый класс Employee:
//     Поля: firstName, lastName, приватное поле salary.
//     Геттеры и сеттеры для всех полей с валидацией, аналогично Task 1 и Task 2.
//     Метод getFullName(), возвращающий полное имя сотрудника.
// 2. Создайте подклассы Developer, Manager, и Designer: Каждый из этих подклассов будет наследовать от класса Employee 
//    и добавлять свои специфические поля.
//   Подкласс Developer:
//     Поле: programmingLanguages — массив языков программирования, которыми владеет разработчик.
//     Метод addProgrammingLanguage(language: string), который добавляет новый язык программирования в массив.
//   Подкласс Manager:
//     Поле: teamSize — количество людей в команде менеджера.
//     Метод increaseTeamSize() — увеличивает количество людей в команде.
//   Подкласс Designer:
//     Поле: designTools — массив инструментов для дизайна, которыми владеет дизайнер.
//     Метод addDesignTool(tool: string) — добавляет новый инструмент в арсенал дизайнера.
// 3. Добавьте метод getEmployeesByProfession(profession: string) возвращающий массив всех сотрудников переданной профессии
//       getEmployeesByProfession("Developer"), возвращающий массив всех разработчиков в компании.
//       getEmployeesByProfession("Manager"), возвращающий массив всех менеджеров.
//       getEmployeesByProfession("Designer"), возвращающий массив всех дизайнеров.
// 4. Добавьте валидацию в метод addEmployee класса Company, которая будет проверять имя+фамилию нового сотрудника на уникальность.
//    Добавлять сотрудника с таким же именем+фамилией как у уже имеющегося - нельзя.
const alfa = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
class Employee {
    #salary;
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
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
        if (typeof lastName !== "string" || lastName.length <= 2 || lastName.length >= 50 || !lastName.split('').every(char => alfa.trim().includes(char))) {
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
        return  this._firstName + this._lastName;
    }
}
class Developer extends Employee {
    programmingLanguages = [];
    constructor(firstName, lastName, salary, programmingLanguages = []) {
        super(firstName, lastName, salary);
        for (const programmingLanguage of programmingLanguages) {
            this.addProgrammingLanguage(programmingLanguage);
        }
    };
    addProgrammingLanguage(language){
        if (typeof language !== "string") {
        console.log('Некорректный тип данных');
        return;
        } else {
            this.programmingLanguages.push(language);
        }
    }
 }
class Manager extends Employee {
    constructor(firstName, lastName, salary, teamSize) {
        super(firstName, lastName, salary);
        this.teamSize = teamSize;
    };
    increaseTeamSize(num){
        if (typeof num !== "number") {
            console.log('Некорректный тип данных');
            return;
            } else {
                this.teamSize += num;
            }
        }
 }
 class Designer extends Employee {
    designTools = [];
    constructor(firstName, lastName, salary, designTools = []) {
        super(firstName, lastName, salary);
        for (const designTool of designTools) {
            this.addDesignTool(designTool);
        }
    };
    addDesignTool(tool){
        if (typeof tool !== "string") {
        console.log('Некорректный тип данных');
        return;
        } else {
            this.designTools.push(tool);
        }
    }
 }
 class Company {
    #employees = [];
    map = { 
        Manager: Manager,
        Developer: Developer,
        Designer: Designer,
    };
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
        if (!(employee instanceof Employee)) {
            throw new Error("Invalid value, you need to add some employee!");
        } else {
            let index = this.getEmployees().findIndex(emp => emp.fullName() === (employee.firstName + employee.lastName));
            if (index !== -1) {
                console.log('Работник с такими ФИ уже есть!');
                console.log(this.getEmployees().at(index))
            } 
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
            throw new Error("Invalid value");
            }
        let index = this.getEmployees().findIndex(emp => emp._firstName === firstName);
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
    // getEmployeesByProfession(profession) {
    //     if (profession === "Manager") {
    //         const result = [];
    //         this.getEmployees().forEach(emp => {
    //             if (emp instanceof Manager) {
    //                 result.push(emp);
    //             }
    //         });
    //         return result;
    //     } else if (profession === "Developer") {
    //         const result = [];
    //         this.getEmployees().forEach(emp => {
    //             if (emp instanceof Developer) {
    //                 result.push(emp);
    //             }
    //         });
    //         return result;
    //     }else if (profession === "Designer") {
    //         const result = [];
    //         this.getEmployees().forEach(emp => {
    //             if (emp instanceof Designer) {
    //                 result.push(emp);
    //             }
    //         });
    //         return result;
    //     } else {
    //        return 'Найдено 0.'
    //     }
    // }

    getEmployeesByProfession(profession) {
        const result = [];
        const currentProfession = map[profession];
        this.getEmployees().forEach((emp) => {
          if (emp instanceof currentProfession) {
            result.push(emp.fullName());
          }
        });
        return result;
    }

    getTotalSalary() {
        return this.getEmployees().reduce((sum, emp) =>  {
            sum += emp.salary;
            return sum;
        }, 0);
    }
}
const company = new Company("Tech Corp", "123-456", "Main Street");
const emp1 = new Manager("John", "Doe", 3000, 5);
const emp2 = new Developer("Jane", "Smith",  5000, ['JS', 'C++']);
const emp3 = new Developer("Mark", "Brown",  4000, ['Python']);
const emp4 = new Designer("Helen", "Twist",  3000, ['Corel Draw', 'Illustrartor']);
const emp5 = new Manager("German", "Somex",  5000, 10);
const emp6 = new Designer("Mister", "Fox",  4000, ['Adobe Photoshop', 'Figma']);
const emp7 = new Developer("Alena", "JSov",  3000, ['JS', 'Kotlin']);
const emp8 = new Manager("Maria", "Joplin",  5000, 4);
const emp9 = new Developer("Arja", "Stark", 4000, ['JS', 'C++', 'C', 'Python', 'C#']);
const emp10 = new Manager("Arja", "Stark", 1000, 5);
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);
company.addEmployee(emp5);
company.addEmployee(emp6);
company.addEmployee(emp7);
company.addEmployee(emp8);
company.addEmployee(emp9);
company.addEmployee(emp10); //Сотрудник с тем же ФИ
emp8.increaseTeamSize(4); //Увеличили команду менеджера Марии
console.log('Это менеджеры:', company.getEmployeesByProfession("Manager"));
console.log('Это разработчики:',company.getEmployeesByProfession("Developer"));
console.log('Это дизайнеры:',company.getEmployeesByProfession("Designer"));
console.log('Это QA: ', company.getEmployeesByProfession("QA")); //Таких нет
console.log('Это "7": ', company.getEmployeesByProfession(7)); //Таких нет