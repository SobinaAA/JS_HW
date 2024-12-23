// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.
const validatePassword = (password: string): boolean =>
   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\S).{8,}$/.test(password);
console.log(validatePassword('12888277172828'));
console.log(validatePassword('              '));
console.log(validatePassword('129Jk'));
console.log(validatePassword('129JkPppskwq'));
console.log(validatePassword('12888e77172828'));
console.log(validatePassword('12888E77172828'));
console.log(validatePassword('     7Yh'));