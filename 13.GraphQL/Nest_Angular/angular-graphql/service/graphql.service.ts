import { Injectable } from '@angular/core';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  private client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

  constructor() {}

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
