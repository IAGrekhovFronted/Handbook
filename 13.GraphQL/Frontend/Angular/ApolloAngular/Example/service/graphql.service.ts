import { Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GetAuthor } from '../src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  private apollo = inject(Apollo);

  getAuthor() {
    return this.apollo.watchQuery<any>({
      query: GetAuthor,
    }).valueChanges;
  }
}
