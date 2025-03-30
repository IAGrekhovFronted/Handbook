import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ExchangeRates } from './app/app.component';

bootstrapApplication(ExchangeRates, appConfig).catch((err) =>
  console.error(err)
);
