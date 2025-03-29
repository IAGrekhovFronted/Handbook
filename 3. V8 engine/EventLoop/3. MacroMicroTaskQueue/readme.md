## Macrotask queue
1. Чтобы запланировать новую макрозадачу - использовать SetTimeout с нулевой задержкой (минимальная задержка выполнения 4 мс).
2. Помещаются в Macrotask queue: 
    - AJAX-запросы, 
    - некоторые WebApi (setInterval, setTimeout), 
    - обработка событий пользовательского ввода (например, клики, скроллинг).

## Microtask queue
1. Чтобы запланировать новую микрозадачу можно использовать промис или queueMicrotask(f).
2. Помещаются в Microtask queue: 
    - промисы, queueMicrotask(f), 
    - async/await (вариант обработки промисов), 
    - fetch(), 
    - операции с очередью мутации (например, используемые в API MutationObserver для наблюдения за изменениями DOM).

## Общая схема
Call Stack => Microtask Queue => Macrotask queue => Call Stack