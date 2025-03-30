import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../service/graphql.service';

@Component({
  selector: 'exchange-rates',
  template: '',
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
    console.log('========');
    console.log(response);
  }
}
