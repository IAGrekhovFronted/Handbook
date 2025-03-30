2 основные стратегии:

1. Сначала код
2. Сначала схема

## Подключение в проект

1. Установка пакетов: @nestjs/graphql, @nestjs/apollo
2. Импорт в модуль

```ts
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
```

3. Настроить модуль

## Настройка модуля GraphQLModule

### Общие настройки

include - ограничение модулей, который включаются в единый интерфейс GraphQL

```ts
GraphQLModule.forRoot({
  include: [CatsModule],
}),
```

### Сначала код

1. Генерация схемы "на лету" и сохранение ее в памяти (без генерации файла):

```ts
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
});
```

2. Генерация схемы в определенный файл:

```ts
import { join } from 'path';

GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
}),

/**
 * join - метод, импортируемый из модуля path в Node.js. Используется для объединения частей пути файловой системы в корректный путь, обязательно учитывая системные разделители (например, слэш / для Unix и обратный слэш \ для Windows).
 * process.cwd() - это встроенный метод Node.js, который возвращает текущую рабочую директорию вашего процесса
 */
```

### Сначала схема

**Параметр typePaths** - указывает, где GraphQLModule должен искать файлы определения схемы GraphQL SDL
**Параметр definitions** - добавляет автоматическую генерацию типизации
по дефолту генерируются интерфейсы
outputAs: 'class' - генерация классов

```ts
import { join } from 'path';

GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
  },
}),
```

## Создание эндпойнтов GraphQL

### Сначала код

1. Написать модель сущности. В модели прописать декораторы GraphQL для парсинга GraphQL-модулем

```ts
import { Field, Int, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;
  @Field({ nullable: true })
  name: string;
}
```

2. Создать сервис.

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

3. Написать резолвер.

```ts
import { Resolver, Query } from "@nestjs/graphql";
import { Author } from "./authors.model";
import { AuthorsService } from "./authors.service";

@Resolver(() => [Author])
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(() => [Author])
  async author() {
    return this.authorsService.getAuthors();
  }
}
```

4. Подключить все в модуль

```ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { AuthorsService } from "./authors/authors.service";
import { PrismaClient } from "@prisma/client";
import { AuthorsResolver } from "./authors/authors.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsService, PrismaClient, AuthorsResolver],
})
export class AppModule {}
```
