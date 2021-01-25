import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/cars/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
