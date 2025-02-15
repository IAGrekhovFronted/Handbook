console.log('Step 1')

setTimeout(
    () => console.log('Step 3'), 500
)

console.log('Step 2')

/**
 * 1. Функция console.log('Step 1') попадает в Call Stack => выполняется => удаляется из Call Stack;
 * 2. Функция setTimeout попадает в Call Stack => callback передается в Web Api, который отсчитывает 500 мс => после чего добавляется в Task Queue (очередь задач)
 * 3. Функция console.log('Step 2') попадает в Call Stack => выполняется => удаляется из Call Stack; 
 * 4. Event Loop (цикл событий) перед первый элемент в очереди задач и отправляет его в Call Stack, когда Call Stack остается пустым.
 * 5. Функция console.log('Step 3') попадает в Call Stack => выполняется => удаляется из Call Stack;
 */