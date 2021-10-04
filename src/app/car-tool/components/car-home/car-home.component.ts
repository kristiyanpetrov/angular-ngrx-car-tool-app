import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../../app-state';
import { Car } from '../../models/car';
import {
  refreshCarsRequest, appendCarRequest, replaceCarRequest, editCar, deleteCarRequest, cancelCar
} from '../../car.actions';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars$ = this.store.pipe(select(state => state.cars));
  editCarId$ = this.store.pipe(select('editCarId'));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(refreshCarsRequest());
  }

 doAppendCar(car: Car) {
    this.store.dispatch(appendCarRequest({ car }));
 }

  doReplaceCar(car: Car) {
    this.store.dispatch(replaceCarRequest({ car }));
  }

  doEditCar(carId: number) {
    this.store.dispatch(editCar({ carId }));
  }

  doDeleteCar(carId: number) {
    this.store.dispatch(deleteCarRequest({ carId }));
  }

  doCancelCar() {
    this.store.dispatch(cancelCar());
  }
}
