import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { carsReducer, editCarIdReducer } from "./car-tool/car.reducers";

import { CarToolModule } from './car-tool/car-tool.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CarEffects } from "./car-tool/car.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarToolModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cars: carsReducer,
      editCarId: editCarIdReducer,
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ CarEffects ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
