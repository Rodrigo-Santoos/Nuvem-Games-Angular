import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { withRoutes } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { provideServerRendering } from '@angular/platform-server';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRendering()],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
