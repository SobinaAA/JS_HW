export {};
// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим как минимум поле { id: number }. 
// Класс должен служить для хранения объектов типа T в приватном массиве.
// Подсказки:
//   - Используйте ограничение типа: T extends { id: number }, чтобы убедиться, что T всегда имеет поле id.
//   - Для метода add используйте утилитарный тип Omit<T, 'id'>, чтобы разрешить добавление объектов без поля id.
//   - Для метода update используйте Partial<T> и добавьте ограничение, чтобы всегда было поле id.
// Реализуйте в классе следующие методы:
//  - Конструктор должен принимать необязательный массив объектов типа T. Если массив передан, его элементы добавляются в хранилище.
//  - Метод add принимает либо объект типа T, либо объект типа Omit<T, 'id'>.
//    Если объект без id, сгенерируйте уникальный id (например, с использованием счетчика или функции Date.now()).
//    Подсказка: Используйте утилитарный тип Omit<T, 'id'> для указания типов объектов без поля id.
//  - Метод update принимает объект с обязательным полем id и любым набором остальных ключей из T (используйте Partial<T>). 
//    Найдите объект с указанным id и обновите его соответствующими полями.
//  - Метод remove принимает id и удаляет объект из массива.
//  - Метод getById принимает id и возвращает объект с этим id, если найден, или undefined, если нет.
//  - Метод getAll возвращает все объекты в хранилище.

class Storage<T extends { id: number }> {
    private array : T[] = [];
    constructor(array?: T[]) {
        if (array) this.array.push(...array);
    }
    countId () : number {
       let max = 0;
       this.array.forEach(elem => {
        if (elem.id > max) max = elem.id;
       });
       return max + 1;
    }
    add (element: T | Omit<T, 'id'>): void {
        if ('id' in element) {
            this.array.push(element)
        } else {
        const newId = this.countId();
        const newElement = {...element, id: newId}
        this.array.push(newElement as T)
        }
    }
    findIndexById (id: number) : number {
        return this.array.findIndex((element) => element.id == id);
    }
    update (elem: Partial<T> & { id: number }): void { 
        const index = this.findIndexById(elem.id);
        if (index !== -1)  this.array[index] = {...this.array[index], ...elem};
    }
    remove(id: number) : void {
        const index = this.findIndexById(id);
        if (index !== -1) this.array.splice(index, 1);
        }
    getById(id: number): T | undefined {
        const index = this.findIndexById(id);
        if (index !== -1) return this.array[index];
        return undefined;
    }
    getAll(): T[] {
        return this.array;
    }
}
//   Пример использования:
type User = { id: number; name: string; age: number };
const storage = new Storage<User>();
//     Добавление объектов
storage.add({ id: 1, name: 'Anatoly', age: 33 }); // Объект с id
storage.add({ name: 'Elena', age: 25 }); // Объект без id, id сгенерируется автоматически
//     Обновление объектов
storage.update({ id: 1, name: 'Egor' }); // Обновление имени пользователя с id 1
storage.update({ id: 2, name: 'Tatiana', age: 33 }); // Обновление имени и возраста пользователя с id 2
//      Получение объектов
console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]
//     Удаление объектов
storage.remove(2);
console.log(storage.getAll()); //[ { id: 1, name: 'Egor', age: 33 } ]
