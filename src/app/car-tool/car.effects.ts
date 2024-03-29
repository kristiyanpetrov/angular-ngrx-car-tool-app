import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { CarsService } from './services/cars.service';
import {
  refreshCarsRequest, refreshCarsDone, appendCarRequest,
  replaceCarRequest, deleteCarRequest
} from './car.actions';

@Injectable()
export class CarEffects {
  constructor(
    private carsService: CarsService,
    private actions$: Actions,
  ) {
  }

  refreshCars$ = createEffect(() => this.actions$.pipe(
    ofType(refreshCarsRequest),
    switchMap(() => {
      return this.carsService
        .all()
        .pipe(
          map(cars => refreshCarsDone({cars}))
        );
    })
  ));

  appendCar$ = createEffect(() => this.actions$
    .pipe(
      ofType(appendCarRequest),
      switchMap((action) => {
        return this.carsService.append(action.car)
          .pipe(
            map(() => refreshCarsRequest())
          );
      })
    ));

  replaceCar$ = createEffect(() => this.actions$
    .pipe(
      ofType(replaceCarRequest),
      switchMap((action) => {
        return this.carsService.replace(action.car)
          .pipe(
            map(() => refreshCarsRequest())
          );
      })
    )
  );

  deleteCar$ = createEffect(() => this.actions$
    .pipe(
      ofType(deleteCarRequest),
      switchMap((action) => {
        return this.carsService.delete(action.carId)
          .pipe(
            map(() => refreshCarsRequest())
          );
      })
    )
  );

}
