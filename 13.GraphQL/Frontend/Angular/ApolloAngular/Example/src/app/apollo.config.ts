import { provideApollo } from 'apollo-angular';
import {
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
} from '@apollo/client/core';

const uri = 'http://localhost:3000/graphql';

export function createApollo(): ApolloClientOptions<any> {
  return {
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  };
}

export const apolloProviders = [provideApollo(createApollo)];
