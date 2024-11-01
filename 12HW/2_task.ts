// Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
//   - Интерфейс IPerson должен содержать:
//       Стринговые поля: name, surname
//       Намберовые поля: experienceYears
//       Метод, возвращающий строку: getDetails().
interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails() : string;
   }
//   - Абстрактный класс Employee должен:
//       Имплементировать интерфейс IPerson.
//       Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный (protected) абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
//       Метод calculateSalary() должен быть использован в конструкторе
abstract class Employee implements IPerson {
    protected salary = 0;
    constructor(
        public name: string,
        public surname: string,
        public experienceYears: number
        ) {
            this.calculateSalary();
        };
    abstract getDetails(): string;
    protected abstract calculateSalary(): void;
}
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
type Prefers = 'scrum' | 'kanban';
type Languages = 'js'| 'ts' | 'java' | 'python';

class Manager extends Employee {
    constructor(public name: string,
        public surname: string,
        public experienceYears: number,
        public prefered: Prefers) {
        super(name, surname, experienceYears);
        this.calculateSalary();
    }    
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience with ${this.prefered} and ${this.salary} salary`;
    }
    protected calculateSalary(): void {
        this.salary = this.experienceYears * 500;
    }
}
class Developer extends Employee {
    constructor(public name: string,
        public surname: string,
        public experienceYears: number,
        public programmingLanguage: Languages) {
        super(name, surname, experienceYears);
        this.calculateSalary();
    }    
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary} salary`;
    }
    protected calculateSalary(): void {
        this.salary = this.experienceYears * 1000;
    }
}
const myDEv = new Developer('Mister', 'Proggramist', 12, 'js');
const myMan = new Manager('Miss', 'Managiress', 10, 'kanban');
console.log(myDEv.getDetails());
console.log(myMan.getDetails());