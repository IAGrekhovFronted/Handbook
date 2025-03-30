## Начало работы с Apollo Angular

1. Создать файл конфигурации apollo.config.ts в 'src/app'

```ts
//provideApollo — функция из apollo-angular, которая регистрирует Apollo Client в Angular DI
import { provideApollo } from "apollo-angular";

/**
 * InMemoryCache — кеш для хранения результатов GraphQL-запросов.
 * HttpLink — Apollo-связка, которая отправляет запросы через HTTP.
 * ApolloClientOptions — интерфейс, описывающий параметры для Apollo Client.
 */
import {
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
} from "@apollo/client/core";

const uri = "http://localhost:3000/graphql";

//Функция для создания настроек Apollo Client
export function createApollo(): ApolloClientOptions<any> {
  return {
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  };
}

//Регистрация Apollo в Angular DI (передает массив провайдеров)
export const apolloProviders = [provideApollo(createApollo)];
```

2. Создать сервис

```ts
import { Injectable, inject } from "@angular/core";
import { Apollo, gql } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class GraphqlService {
  private apollo = inject(Apollo);

  getAuthors() {
    return this.apollo.query<{ users: { id: string; name: string }[] }>({
      query: gql`
        query {
          author {
            id
            name
          }
        }
      `,
    });
  }
}
```

3. Использовать в компоненте как обычный сервис

## Динамическая типизация. Выдение фрагментов GraphQL-запросов

1. Установка пакетов:
   @graphql-codegen/cli
   @graphql-codegen/typescript
   @graphql-codegen/typescript-operations
   @graphql-codegen/typescript-document-nodes

2. Создание кофига:

```yml
overwrite: true
schema: "http://localhost:3000/graphql"
documents: "src/**/*.graphql"
generates:
  src/generated/graphql.ts:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-document-nodes" # Генерирует gql-объекты
```

3. Создание фрагментов .graphql
4. Запуск генерации .ts - файлов на основе фрагментов
   npx graphql-codegen --config codegen.yml
5. Импорт в сервис/компонент сгенерированных типов и фрагментов запросов с парсером gql

```ts
import { Injectable, inject } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GetAuthorDocument } from "src/generated/graphql"; // импортируем сгенерированный запрос

@Injectable({
  providedIn: "root",
})
export class GraphqlService {
  private apollo = inject(Apollo);

  getAuthor() {
    return this.apollo.watchQuery<any>({
      query: GetAuthorDocument,
    }).valueChanges;
  }
}
```
