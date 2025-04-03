## Первичная настройка GraphQL

1. В Nest добавить зависимости для GraphQL. Удобнее использовать подход "сначала код"
   @nestjs/graphql
   @nestjs/apollo
2. Настроить импортировать в основной модуль Graphql-модуль и настроить его для схемы "сначала код", чтобы схема использовала JIT-компиляцию

```ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthorsModule } from "./authors/authors.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Первичная настройка Prisma

1. Установить зависимости для Prisma
   prisma --save-dev (используется только для генерации моделей, миграций и т.д., на проде не нужна)
   @prisma/client

2. Инициализировать PrismaClient. Заполнить .env. Подключиться к БД
   npx prisma init

3. Создать PrismaService. Не использовать прямое подключение через PrismaClient из-за возможных утечек подключений к БД (создании множественных коннекшенов)

```ts
import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

4. Подключить PrismaService в главный модуль

5. Подключить библиотеку для автоматической типогенерации классов для GraphQL-интерфейсов
   prisma-nestjs-graphql --save-dev

6. Сгенерировать классы для GraphQL-сервисов и резолверов

## Создание endpoint

1. Сгенерировать модуль, сервис и резолвер (или сервис и резолвер)

2. Создать сервис для взаимодействия с БД через PrismaService

3. Создать резолвер с соответствующим методом

```ts
import { Resolver, Query, Int } from "@nestjs/graphql";
import { AuthorsService } from "./authors.service";
import { authors } from "src/@generated/authors/authors.model";

@Resolver(() => authors)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => authors, { name: "author" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.authorsService.findOne(id);
  }
}
```

# Результат

1. Создание единого источника истины в схеме БД - Backend
2. Автоматическая генерация моделей, классов
