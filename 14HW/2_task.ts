// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта
function getKeyByValue<T extends object> (param: T, value: (T)[keyof T]) : keyof T | undefined {
    if (Object.keys(param).length) {
        for (let key in param) {
            if (param[key] === value) return key;        
        }
    }
    return undefined;
}
console.log(getKeyByValue({id: 1000, name: 'Alice', surname: 'Fox', age: 30, salary: 1500}, 1500));