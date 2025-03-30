## Начало работы с Apollo Client

1. Установи @apollo/client graphql
2. Создай сервис:

```ts
import { Injectable } from "@angular/core";
/**
 * ApolloClient — основной клиент Apollo, который управляет отправкой GraphQL-запросов.
 * InMemoryCache — механизм кеширования запросов.
 * gql — функция Apollo для парсинга GraphQL-запросов.
 */
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

@Injectable({
  providedIn: "root",
})
export class GraphqlService {
  private client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  constructor() {}
  /**
   * query - GraphQL-запрос
   * variables - параметры GraphQL-запроса
   */
  query<T>(query: string, variables?: Record<string, any>) {
    return this.client.query<T>({
      query: gql(query),
      variables,
    });
  }

  mutate<T>(mutation: string, variables?: Record<string, any>) {
    return this.client.mutate<T>({
      mutation: gql(mutation),
      variables,
    });
  }
}
```

3. Используй сервис в компоненте

```ts
import { Component, OnInit } from "@angular/core";
import { GraphqlService } from "../../service/graphql.service";

@Component({
  selector: "exchange-rates",
  template: "",
})
export class ExchangeRates implements OnInit {
  constructor(private readonly graphql: GraphqlService) {}

  async ngOnInit(): Promise<void> {
    const query = `query {
      author {
        id
        name
        }
      }`;
    const response = await this.graphql.query(query);
  }
}
```
