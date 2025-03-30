import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphqlService } from '../../service/graphql.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly gqlService: GraphqlService) {}

  ngOnInit(): void {
    const authors = this.gqlService
      .getAuthor()
      .subscribe((value) => console.log(value));
    // console.log('-------');
    // console.log(authors);
  }
}
