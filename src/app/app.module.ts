import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
