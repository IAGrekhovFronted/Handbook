## Потенциальные проблемы

1. Нарушение перезагрузки компонентова при инициализации соединения во время рендера.
   **Решение**: реализовать WebSocket-подключение после рендера, хук afterNextRender()

2. Поломка механизма ChangeDetection
   **Решение**: принудительный вызов ChangeDetectionRef при работе определенного компонента.

3. Утечка памяти:
   **Решение**:

- Использование State-manager
- Проверка наличия сокета перед попыткой отключения
- Удаление всех слушателей при ngDestroy()

https://devgem.vercel.app/posts/managing-websocket-connections-in-angular-components-effectively
