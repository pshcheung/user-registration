import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AppActions } from '@app/store/actions';
import * as fromApp from "@app/store/reducers/root.reducers";
import { UserRegistrationService } from "@app/services/user-registration.service";
import { Store } from "@ngrx/store";
import { UserProfileService } from "@app/services/user-profile.service";
import {
  loadProfileFailure,
  loadProfileSuccess,
  registerUserFailure,
  registerUserSuccess
} from "@app/store/actions/app.actions";

@Injectable()
export class AppEffects {
  navigateTo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.navigateTo),
      tap(({ path }) => {
        this.router.navigate([path]);
      }),
    ),
    { dispatch: false }
  );

  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadProfile),
      tap(() => this.store.dispatch(AppActions.setLoading())),
      switchMap(() => this.userProfileService.getProfile().pipe(
        map(profile => loadProfileSuccess({ profile })),
        catchError((error) => of(loadProfileFailure(error)))
      )),
      tap(() => this.store.dispatch(AppActions.resetLoading())),
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.registerUser),
      tap((user) => this.store.dispatch(AppActions.setLoading())),
      switchMap((user) => this.userRegistrationService.submitRegistration().pipe(
        map(user => registerUserSuccess({ user })),
        catchError((error) => of(registerUserFailure(error)))
      )),
      tap(() => this.store.dispatch(AppActions.resetLoading())),
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<fromApp.RootState>,
    private userProfileService: UserProfileService,
    private userRegistrationService: UserRegistrationService
  ) {
  }
}
