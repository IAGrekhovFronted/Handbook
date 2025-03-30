import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { apolloProviders } from './app/apollo.config';

bootstrapApplication(AppComponent, {
  providers: [...apolloProviders],
});
