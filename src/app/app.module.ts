import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {DogsCardsComponent} from "./dogs-cards/dogs-cards.component";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, DogsCardsComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
