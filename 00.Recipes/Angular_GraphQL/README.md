## Установка зависимостей для GraphQL-запросов

     @apollo/client graphql
     apollo-angular

## Создание конфига для подключения к бэку

```ts
// src/apollo.config.ts
import { provideApollo } from "apollo-angular";
import {
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
} from "@apollo/client/core";
import { environment } from "./environments/environments.dev";

export function createApollo(): ApolloClientOptions<any> {
  return {
    link: new HttpLink({ uri: environment.url }),
    cache: new InMemoryCache(),
  };
}

export const apolloProviders = [provideApollo(createApollo)];
```

## Создание сервиса для запросов

```ts
import { Injectable, inject } from "@angular/core";
import { Apollo, gql } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class ApolloService {
  private apollo = inject(Apollo);

  Query(query: string) {
    return this.apollo.query<{ users: { id: string; name: string }[] }>({
      query: gql`
        ${query}
      `,
    });
  }
}
```

## Установка зависимостей для динамической типизации

@graphql-codegen/cli
@graphql-codegen/typescript
@graphql-codegen/typescript-operations
@graphql-codegen/typescript-document-nodes

## Создание конфига для динамической типизации

```ts
// codegen.yml
overwrite: true
schema: "http://localhost:3000/graphql"
documents: "src/**/*.graphql"
generates:
  src/generated/graphql.ts:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-document-nodes"
```

=>
Написание фрагментов запросов .graphql
=>
Запуск типогенерации:
npx graphql-codegen --config codegen.yml
=>
Для использования в сервисах помимо типов генерируются Query:

```ts
export const GetAuthor = gql`
  query GetAuthor {
    authors {
      id
      name
    }
  }
`;
```

## Использование в сервисах

```ts
import { Injectable, inject } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GetAuthor } from "../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class AuthorsService {
  private apollo = inject(Apollo);

  getAuthor() {
    return this.apollo.watchQuery<any>({
      query: GetAuthor,
    }).valueChanges;
  }
}
```
