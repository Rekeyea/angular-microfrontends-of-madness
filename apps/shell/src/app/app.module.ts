import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'dashboard',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'charts',
          loadChildren: () =>
            import('charts/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'config',
          loadChildren: () =>
            import('config/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
