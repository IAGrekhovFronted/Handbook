Асинхронный код выполняется через Queue.

Queue (очередь) работает по принципу FIFO (first in first out - первый зашел, первый вышел).

Рендеринг никогда не происходит во время выполнения задачи. Неважно, сколько времени занимает выполнение задачи. Изменения в DOM отображаются только после завершения задачи.

Если выполнение задачи занимает слишком много времени, браузер не может выполнять другие задачи, например обрабатывать пользовательские события. Поэтому через некоторое время он выдаёт предупреждение «Страница не отвечает», предлагая завершить задачу вместе со страницей.