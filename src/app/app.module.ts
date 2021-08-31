import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriyankaComponent } from './priyanka/priyanka.component';
import { MahimaComponent } from './mahima/mahima.component';
import { ManeeshaComponent } from './maneesha/maneesha.component';
import { MeghanaComponent } from './meghana/meghana.component';

@NgModule({
  declarations: [
    AppComponent,
    PriyankaComponent,
    MahimaComponent,
    ManeeshaComponent,
    MeghanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
