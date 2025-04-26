## Необходимые зависимости

@ngrx/store: Библиотека управления основным состоянием.
@ngrx/effects: Для обработки побочных эффектов, таких как вызовы API.
@ngrx/entity: Для управления коллекциями данных (сущностей).
@ngrx/store-devtools: Для отладки состояния хранилища с помощью расширений браузера.
@ngrx/component-store: Для управления состоянием локальных компонентов.

## Настроить src/app/app.config.ts

```ts
import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),

    provideEffects([]),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
};
```

provideStore(): Инициализирует глобальный контейнер хранилища.
provideEffects([]): Инициализирует систему эффектов.
provideStoreDevtools(): Подключает ваше приложение к браузерному расширению Redux DevTools.
maxAge: 25, // Сохраняет последние 25 состояний
logOnly: !isDevMode(), // Ограничить расширение режимом только для записи в рабочей среде
autoPause: true, // Приостанавливает запись действий и изменений состояния, когда окно расширения не открыто
trace: false, // Если установлено значение true, будет включаться трассировка стека для каждого отправленного действия
traceLimit: 75, // Максимальное количество кадров трассировки стека, которые будут сохранены (если установлено значение true)
connectInZone: true // Если установлено значение true, соединение устанавливается в зоне Angular

## Action
