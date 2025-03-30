const getLastName = () => 'Smith';
const getFirstName = () => 'Tom';

const notify = () => {
    const result = `Hi, mr. ${getFirstName()} ${getLastName()}`;
    console.log(result);
}

notify();
/**
 * 1. Создается Global execution context (глобальный контекст исполнения).
 * 2. Функция getLastName() сохраняется в Global execution context (глобальный контекст исполнения = heap).
 * 3. Функция getFirstName() сохраняется в Global execution context (глобальный контекст исполнения).
 * 4. Функция notify() сохраняется в Global execution context (глобальный контекст исполнения).
 * 5. Создается Local execution context (локальный контекст исполнения) функции notify().
 * 6. В Locale execution context (локальный контекст исполнения) функции notify() добавляется переменная result.
 * 7. Функция notify() добавляется в Call Stack (стек вызовов).
 * 8. Вложенная в notify() функция getFirstName() добавляется в Call Stack => выполняется => удаляется из стека вызовов.
 * 9. Вложенная в notify() функция getLastName() добавляется в Call Stack => выполняется => удаляется из стека вызовов.
 * 10. Функция console.log(result) добавляется в Call Stack (ссылка на result берется из local execution context) => выполняется => удаляется из Call Stack.
 * 11. Функция notify() выполнена и удаляется из Call Stack.
 */