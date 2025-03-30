## Начало работы

1. Глобальная установка: npm i -g @nestjs/cli
2. Начало нового проекта: nest new project-name

## Настройка CORS

1. Установить @nestjs/platform-express
2. В main.ts добавить конфиг для CORS:

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:4200", // Разрешите конкретный домен
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Разрешенные методы
    credentials: true, // Разрешить отправку куки
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```
