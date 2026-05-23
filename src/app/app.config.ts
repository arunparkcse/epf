import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',   // always jump to top on navigation
        anchorScrolling: 'enabled'          // honour #fragment links
      })
    ),
    provideAnimations()
  ]
};
