## Начало работы

1. Установка:
   npm install prisma --save-dev
   npm install @prisma/client
   npm install @apollo/server

2. Инициализация:
   npx prisma init

3. Настройка prisma/schema.prisma

   Пример урл для localhost (в .env): "postgresql://postgres:2905@localhost:5432/postgres?schema=public"

## Обновление моделей из БД

    npx prisma db pull

## Сброс БД

npx prisma migrate reset

## Накатить миграции с источником правды из кода

npx prisma migrate dev --name add-id-to-artists-and-authors

--name: имя миграции

## Базовые методы

### Получение данных

```ts
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { author } from "@prisma/client";

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAuthors(): Promise<author[]> {
    try {
      const authors: author[] = await this.prisma.author.findMany();
      return authors;
    } catch (error) {
      console.error("Error fetching authors:", error);
      throw new InternalServerErrorException("Could not fetch authors");
    }
  }
}
```
