const getLastName = () => 'Smith';
const getFirstName = () => 'Tom';

const notify = () => {
    const result = `Hi, mr. ${getFirstName()} ${getLastName()}`;
    console.log(result);
}

notify();
/**
 * 1. Функия notify() добавляется в Call Stack;
 * 2. Операция присвоения (const result =) добавляется в Call Stack; 
 * 3. Вложенная функция getFirstName() добавляется в Call Stack => выполняется => удаляется из Call Stack;
 * 4. Вложенная функция getLastName() добавляется в Call Stack => выполняется => удаляется из Call Stack;
 * 5. Выполняется операция присвоения (const result = 'Hi, mr. Tom Smith')
 * 6. Функция console.log(result) добавляется в Call Stack => выполняется => удаляется из него;
 * 7. Функия notify() выполнена и удаляется из Call Stack.
 */