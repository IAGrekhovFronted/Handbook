console.log('Start program');

setTimeout(
    () => console.log('MacroTask #1'), 0
)

queueMicrotask(
    () => console.log('Microtask #1')
)

setTimeout(
    () => console.log('MacroTask #2'), 0
)

queueMicrotask(
    () => console.log('Microtask #2')
)

console.log('Continuation program');

/**
 * 1. Функция console.log('Start program') помещается в Call Stack => выполняется => удаляется из Call Stack;
 * 2. setTimeout(() => console.log('MacroTask #1'), 0) помещается в Call Stack => callback передается в WebApi среды исполнения и помещается в Macrotask queue => setTimeout() удаляется из Call Stack;
 * 3. queueMicrotask(() => console.log('Microtask #1')) помещается в Call Stack => callback передается в WebApi среды исполнения и помещается в Microtask queue => queueMicrotask() удаляется из Call Stack;
 * 4. setTimeout(() => console.log('MacroTask #2'), 0) помещается в Call Stack => callback передается в WebApi среды исполнения и помещается в Macrotask queue => setTimeout() удаляется из Call Stack;
 * 5. queueMicrotask(() => console.log('Microtask #2')) помещается в Call Stack => callback передается в WebApi среды исполнения и помещается в Microtask queue => queueMicrotask() удаляется из Call Stack;
 * 6. Функция console.log('Continuation program') помещается в Call Stack => выполняется => удааляется из Call Stack;
 * 7. Выполнение всех микрозадач из Microtask queue: queueMicrotask(() => console.log('Microtask #1')) и queueMicrotask(() => console.log('Microtask #2'));
 * 8. Выполнение следующей макрозадачи из Macrotask queue - setTimeout(() => console.log('MacroTask #1'), 0);
 * 9. Если нет микрозадач - выполнение следующей макрозадачи из Macrotask queue - setTimeout(() => console.log('MacroTask #2'), 0).
 */