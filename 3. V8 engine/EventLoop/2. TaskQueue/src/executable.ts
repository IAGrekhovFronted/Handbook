console.log('Step 1')

setTimeout(
    () => console.log('Step 3'), 500
)

console.log('Step 2')

/**
 * 1. Функция console.log('Step 1') добавляется в Call Stack => выполняется => удаляется из Call Stack.
 * 2. Функция setTimeout(() => console.log('Step 3'), 500) помещается в Call Stack => при выполнении callback передается в WebAPI => функция setTimeout() удаляется из Call Stack.
 * 3. Browser API отсчитывает 500 мс.
 * 4. Функция  console.log('Step 2') добавляется в Call Stack => выполняется => удаляется из стека вызовов.
 * 5. После окончания таймера callback помещается в Macrotask queue.
 * 6. Event Loop проверяет свободен ли Call Stack и нет ли задач в Microtask queue. Если он свободен и микрозадач нет => перется задача из Macrotask queue.
 * 7. Callback из Macrotask queue помещается в Call Stack => выполняется => удаляется из Call Stack.
 */