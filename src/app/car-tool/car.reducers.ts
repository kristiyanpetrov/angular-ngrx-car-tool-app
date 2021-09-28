import { editCar, cancelCar, refreshCarsDone } from './car.actions';

import { createReducer, on } from '@ngrx/store';

import { Car } from './models/car';

const initialCars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'black', price: 25000},
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 125000},
];

export const carsReducer = createReducer<Car[]>([],
  on(refreshCarsDone, (_, action) => action.cars)
);

export const editCarIdReducer = createReducer<number>(-1,
  on(editCar, (_, action) => action.carId),
  on(cancelCar, () => -1),
  on(refreshCarsDone, () => -1),
);
